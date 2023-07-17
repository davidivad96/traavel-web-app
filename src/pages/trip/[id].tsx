import { useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { withSSRContext } from "aws-amplify";
import {
  Expander,
  ExpanderItem,
  Flex,
  Heading,
  Text,
  View,
} from "@aws-amplify/ui-react";
import { GoogleMap } from "@react-google-maps/api";
import { FaEdit } from "react-icons/fa";
import dayjs from "dayjs";
import { Trip as TripModel } from "@/models";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { ChangePhotoModal } from "@/components/ChangePhotoModal";
import { getTripData } from "@/utils/api";
import { generateDates } from "@/utils/functions";

type Activity = {
  id: string;
  type: string;
  name: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
};

type Day = {
  id: string;
  date: Date;
  activities: Activity[];
};

interface Props {
  trip: TripModel;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  query,
}) => {
  const SSR = withSSRContext({ req });
  const tripId = query.id as string;
  try {
    const trip = await getTripData(SSR, tripId);
    return { props: { trip } };
  } catch (error) {
    return { redirect: { permanent: false, destination: "/" } };
  }
};

const Trip = ({ trip: initialTrip }: Props) => {
  const [{ id, destination, startDate, endDate, imgUrl, location }, setTrip] =
    useState<TripModel>(initialTrip);
  const [editImageModal, setEditImageModal] = useState(false);
  const [currentDate, setCurrentDate] = useState<Day>();

  const dates: Day[] = [];
  dates.push(
    ...generateDates(new Date(startDate!), new Date(endDate!)).map(
      (date, index) => ({
        id: index.toString(),
        date,
        activities: [
          {
            id: "1",
            type: "Flight",
            name: "Flight to Paris",
            startTime: "10:00",
            endTime: "12:00",
            location: "Paris",
            description: "Flight to Paris",
          },
          {
            id: "2",
            type: "Hotel",
            name: "Hotel in Paris",
            startTime: "12:00",
            endTime: "13:00",
            location: "Paris",
            description: "Hotel in Paris",
          },
          {
            id: "3",
            type: "Activity",
            name: "Eiffel Tower",
            startTime: "13:00",
            endTime: "15:00",
            location: "Paris",
            description: "Eiffel Tower",
          },
          {
            id: "4",
            type: "Flight",
            name: "Flight to Paris",
            startTime: "10:00",
            endTime: "12:00",
            location: "Paris",
            description: "Flight to Paris",
          },
          {
            id: "5",
            type: "Hotel",
            name: "Hotel in Paris",
            startTime: "12:00",
            endTime: "13:00",
            location: "Paris",
            description: "Hotel in Paris",
          },
          {
            id: "6",
            type: "Activity",
            name: "Eiffel Tower",
            startTime: "13:00",
            endTime: "15:00",
            location: "Paris",
            description: "Eiffel Tower",
          },
          {
            id: "7",
            type: "Flight",
            name: "Flight to Paris",
            startTime: "10:00",
            endTime: "12:00",
            location: "Paris",
            description: "Flight to Paris",
          },
          {
            id: "8",
            type: "Hotel",
            name: "Hotel in Paris",
            startTime: "12:00",
            endTime: "13:00",
            location: "Paris",
            description: "Hotel in Paris",
          },
          {
            id: "9",
            type: "Activity",
            name: "Eiffel Tower",
            startTime: "13:00",
            endTime: "15:00",
            location: "Paris",
            description: "Eiffel Tower",
          },
          {
            id: "10",
            type: "Flight",
            name: "Flight to Paris",
            startTime: "10:00",
            endTime: "12:00",
            location: "Paris",
            description: "Flight to Paris",
          },
          {
            id: "11",
            type: "Hotel",
            name: "Hotel in Paris",
            startTime: "12:00",
            endTime: "13:00",
            location: "Paris",
            description: "Hotel in Paris",
          },
          {
            id: "12",
            type: "Activity",
            name: "Eiffel Tower",
            startTime: "13:00",
            endTime: "15:00",
            location: "Paris",
            description: "Eiffel Tower",
          },
          {
            id: "13",
            type: "Flight",
            name: "Flight to Paris",
            startTime: "10:00",
            endTime: "12:00",
            location: "Paris",
            description: "Flight to Paris",
          },
          {
            id: "14",
            type: "Hotel",
            name: "Hotel in Paris",
            startTime: "12:00",
            endTime: "13:00",
            location: "Paris",
            description: "Hotel in Paris",
          },
          {
            id: "15",
            type: "Activity",
            name: "Eiffel Tower",
            startTime: "13:00",
            endTime: "15:00",
            location: "Paris",
            description: "Eiffel Tower",
          },
          {
            id: "16",
            type: "Flight",
            name: "Flight to Paris",
            startTime: "10:00",
            endTime: "12:00",
            location: "Paris",
            description: "Flight to Paris",
          },
          {
            id: "17",
            type: "Hotel",
            name: "Hotel in Paris",
            startTime: "12:00",
            endTime: "13:00",
            location: "Paris",
            description: "Hotel in Paris",
          },
          {
            id: "18",
            type: "Activity",
            name: "Eiffel Tower",
            startTime: "13:00",
            endTime: "15:00",
            location: "Paris",
            description: "Eiffel Tower",
          },
        ],
      })
    )
  );

  return (
    <>
      <ChangePhotoModal
        isOpen={editImageModal}
        setIsOpen={setEditImageModal}
        tripId={id}
        updateTripImgUrl={(url) =>
          setTrip((trip) => ({ ...trip, imgUrl: url }))
        }
        query={destination}
      />
      <Flex
        direction="row"
        height="calc(100vh - 70px)"
        overflow="hidden"
        style={{ gap: 0 }}
      >
        <Flex flex={6} style={{ overflowY: "scroll", gap: 0 }}>
          <Sidebar
            dates={dates}
            handleOnClickItem={(id) => {
              setCurrentDate(dates.find((date) => date.id === id));
            }}
          />
          <Flex direction="column" flex={1}>
            <View
              width="100%"
              minHeight={220}
              position="relative"
              onClick={() => setEditImageModal(true)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={imgUrl || "/images/default_trip_image.png"}
                alt="Trip image"
                fill
                objectFit="cover"
              />
              <Flex
                id="edit-image-button"
                justifyContent="center"
                alignItems="center"
              >
                <FaEdit width="100%" color="#FFF" />
              </Flex>
            </View>
            {currentDate ? (
              <View
                padding="0 30px 20px 30px"
                height="calc(100vh - 70px)"
                style={{ overflowY: "scroll" }}
              >
                <Heading level={3} textAlign="center" marginBottom={10}>
                  {dayjs(currentDate.date).format("dddd, DD MMMM YYYY")}
                </Heading>
                <Expander type="single">
                  {currentDate.activities.map((activity) => (
                    <ExpanderItem
                      key={activity.id}
                      title={
                        <Text>
                          {activity.startTime} - {activity.endTime}
                        </Text>
                      }
                      value={activity.id}
                    >
                      <Text>{activity.name}</Text>
                      <Text>{activity.description}</Text>
                    </ExpanderItem>
                  ))}
                </Expander>
              </View>
            ) : (
              <Text textAlign="center">Select a date on the sidebar</Text>
            )}
          </Flex>
        </Flex>
        <Flex flex={5}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{
              lat: location?.latitude || 0,
              lng: location?.longitude || 0,
            }}
            zoom={13}
            onClick={(e) => {
              console.log(e);
            }}
          />
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
