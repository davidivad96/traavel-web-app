import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { API, withSSRContext } from "aws-amplify";
import { Card, Divider, Flex, SelectField, Text } from "@aws-amplify/ui-react";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  MarkerF,
} from "@react-google-maps/api";
import { toast } from "react-toastify";
import { TbRoute, TbRouteOff } from "react-icons/tb";
import dayjs from "dayjs";
import { activitiesByDayIdAndStartTime } from "@/graphql/queries";
import { createActivity, deleteActivity } from "@/graphql/mutations";
import { ActivityType, Trip as TripModel } from "@/models";
import { Day as DayModel } from "@/models";
import { Activity as ActivityModel } from "@/models";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { ChangePhotoModal } from "@/components/ChangePhotoModal";
import {
  CreateActivityModal,
  Activity,
} from "@/components/CreateActivityModal";
import { MainContent } from "@/components/MainContent";
import { getTripData } from "@/utils/api";
import { sortActivities } from "@/utils/functions";
import { DeleteActivityMutation } from "@/API";
import { IconButton } from "@mui/material";

const mapStyles = [
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

interface Props {
  trip: TripModel;
  days: DayModel[];
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  query,
}) => {
  const SSR = withSSRContext({ req });
  const tripId = query.id as string;
  try {
    const [trip, days] = await getTripData(SSR, tripId);
    return { props: { trip, days } };
  } catch (error) {
    return { redirect: { permanent: false, destination: "/" } };
  }
};

const Trip = ({ trip: initialTrip, days }: Props) => {
  const [{ id, name, destination, imgUrl, location }, setTrip] =
    useState<TripModel>(initialTrip);
  const [editImageModal, setEditImageModal] = useState(false);
  const [createActivityModal, setCreateActivityModal] = useState(false);
  const [currentDay, setCurrentDay] = useState<DayModel>();
  const [currentActivityId, setCurrentActivityId] = useState<string>("");
  const [currentActivity, setCurrentActivity] = useState<Activity>();
  const [activities, setActivities] = useState<ActivityModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [callDirectionsApi, setCallDirectionsApi] = useState(true);
  const [displayDirections, setDisplayDirections] = useState(true);
  const [travelMode, setTravelMode] = useState<google.maps.TravelMode>(
    google.maps.TravelMode.DRIVING
  );

  useEffect(() => {
    if (activities.length > 1) {
      setCallDirectionsApi(true);
    } else {
      setDirections(null);
    }
  }, [activities, travelMode]);

  const directionsCallback = (
    result: google.maps.DirectionsResult | null,
    status: google.maps.DirectionsStatus
  ) => {
    // Workaround to avoid multiple calls to this function
    // https://github.com/JustFly1984/react-google-maps-api/issues/447
    if (status === "OK" && callDirectionsApi) {
      setDirections(result);
      setCallDirectionsApi(false);
    }
  };

  const handleOnClickDay = async (day: DayModel) => {
    setIsLoading(true);
    setCurrentDay(day);
    try {
      const { data } = await API.graphql<GraphQLQuery<any>>({
        query: activitiesByDayIdAndStartTime,
        variables: { dayId: day.id },
      });
      setActivities(data?.activitiesByDayIdAndStartTime?.items || []);
    } catch (error) {
      toast.error("There was an error!", { theme: "colored" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnCreateActivity = async (activity: Activity) => {
    try {
      const { data } = await API.graphql<GraphQLQuery<any>>({
        query: createActivity,
        variables: {
          input: {
            dayId: currentDay?.id,
            startTime: activity.startTime!.toISOString(),
            endTime: activity.endTime!.toISOString(),
            name: activity.name,
            description: activity.description,
            location: activity.location,
            type: activity.type,
          },
        },
      });
      setActivities((prev) => sortActivities([...prev, data?.createActivity]));
      toast.success("Activity created!", { theme: "colored" });
    } catch (error) {
      toast.error("There was an error!", { theme: "colored" });
    }
  };

  const handleOnEditActivity = async (activity: Activity) => {
    try {
      // In DynamoDB, you can't update the primary key of an item ("startTime" is the sort key).
      // So we need to delete the old item and create a new one.
      const { data } = await API.graphql<GraphQLQuery<any>>({
        query: createActivity,
        variables: {
          input: {
            dayId: currentDay?.id,
            startTime: activity.startTime!.toISOString(),
            endTime: activity.endTime!.toISOString(),
            name: activity.name,
            description: activity.description,
            location: activity.location,
            type: activity.type,
          },
        },
      });
      setActivities((prev) => {
        const newActivities = prev.filter(
          (activity) => activity.id !== currentActivityId
        );
        return sortActivities([...newActivities, data?.createActivity]);
      });
      toast.success("Activity updated!", { theme: "colored" });
      await API.graphql<GraphQLQuery<DeleteActivityMutation>>({
        query: deleteActivity,
        variables: {
          input: { id: currentActivityId },
        },
      });
    } catch (error) {
      toast.error("There was an error!", { theme: "colored" });
    }
  };

  const removeActivity = async (activityId: string) => {
    setActivities((prev) =>
      prev.filter((activity) => activity.id !== activityId)
    );
  };

  return (
    <>
      <Head>
        <title>Traavel App - {name}</title>
        <meta name="description" content={`Trip to ${destination}`} />
      </Head>
      <ChangePhotoModal
        isOpen={editImageModal}
        setIsOpen={setEditImageModal}
        tripId={id}
        updateTripImgUrl={(url) =>
          setTrip((trip) => ({ ...trip, imgUrl: url }))
        }
        query={destination}
      />
      <CreateActivityModal
        isOpen={createActivityModal}
        setIsOpen={setCreateActivityModal}
        handleOnSubmit={(activity) =>
          currentActivity
            ? handleOnEditActivity(activity)
            : handleOnCreateActivity(activity)
        }
        initialActivity={currentActivity}
        setCurrentActivity={setCurrentActivity}
        setCurrentActivityId={setCurrentActivityId}
      />
      <Flex
        direction="row"
        height="calc(100vh - 110px)"
        overflow="hidden"
        style={{ gap: 0 }}
      >
        <Flex flex={6} style={{ overflowY: "scroll", gap: 0 }}>
          <Sidebar days={days} handleOnClickItem={handleOnClickDay} />
          <MainContent
            title={
              currentDay
                ? dayjs(currentDay?.date).format("dddd, DD MMMM YYYY")
                : ""
            }
            imgUrl={imgUrl}
            openEditImageModal={() => setEditImageModal(true)}
            handleOnClickNewActivity={() => setCreateActivityModal(true)}
            handleOnClickEditActivity={(activity: ActivityModel) => {
              setCurrentActivityId(activity.id);
              setCurrentActivity({
                type: activity.type as ActivityType,
                name: activity.name,
                description: activity.description || "",
                startTime: new Date(activity.startTime),
                endTime: new Date(activity.endTime),
                location: {
                  latitude: activity.location?.latitude,
                  longitude: activity.location?.longitude,
                },
              });
              setCreateActivityModal(true);
            }}
            activities={activities}
            isLoadingActivities={isLoading}
            removeActivity={removeActivity}
          />
        </Flex>
        <Flex flex={5}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{
              lat: location?.latitude || 0,
              lng: location?.longitude || 0,
            }}
            zoom={13}
            options={{ styles: mapStyles }}
          >
            <>
              {activities.map((activity) => (
                <MarkerF
                  key={activity.id}
                  position={{
                    lat: activity.location?.latitude || 0,
                    lng: activity.location?.longitude || 0,
                  }}
                  animation={google.maps.Animation.DROP}
                  icon={{
                    url: `/icons/map-pin-${activity.type.toLowerCase()}.svg`,
                    scaledSize: new google.maps.Size(50, 50),
                  }}
                />
              ))}
              {activities.length > 1 && (
                <DirectionsService
                  options={{
                    origin: {
                      lat: activities[0].location?.latitude!,
                      lng: activities[0].location?.longitude!,
                    },
                    destination: {
                      lat: activities[activities.length - 1].location
                        ?.latitude!,
                      lng: activities[activities.length - 1].location
                        ?.longitude!,
                    },
                    waypoints: activities
                      .slice(1, activities.length - 1)
                      .map((activity) => ({
                        location: {
                          lat: activity.location?.latitude!,
                          lng: activity.location?.longitude!,
                        },
                      })),
                    travelMode,
                  }}
                  callback={directionsCallback}
                />
              )}
              {displayDirections && directions && (
                <DirectionsRenderer
                  options={{
                    directions,
                    suppressMarkers: true,
                  }}
                />
              )}
              <Card
                position="absolute"
                top={10}
                right={75}
                padding="8px 18px"
                backgroundColor="#FFF"
              >
                <Flex direction="row">
                  <IconButton
                    size="small"
                    style={{ width: 40, height: 40 }}
                    onClick={() =>
                      setDisplayDirections(
                        (displayDirections) => !displayDirections
                      )
                    }
                  >
                    {displayDirections ? <TbRouteOff /> : <TbRoute />}
                  </IconButton>
                  <Divider orientation="vertical" />
                  <SelectField
                    label=""
                    size="small"
                    value={travelMode}
                    onChange={(e) =>
                      setTravelMode(e.target.value as google.maps.TravelMode)
                    }
                    minWidth={120}
                    options={[
                      google.maps.TravelMode.DRIVING,
                      google.maps.TravelMode.WALKING,
                      google.maps.TravelMode.BICYCLING,
                      google.maps.TravelMode.TRANSIT,
                    ]}
                  />
                </Flex>
              </Card>
            </>
          </GoogleMap>
        </Flex>
      </Flex>
    </>
  );
};

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => (
  <>
    <Navbar title={title} showGoBack />
    {children}
  </>
);

Trip.getLayout = (page: React.ReactNode, { trip: { name } }: Props) => (
  <Layout title={name || ""}>{page}</Layout>
);

export default Trip;
