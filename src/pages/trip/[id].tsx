import { useState } from "react";
import { GetServerSideProps } from "next";
import { API, withSSRContext } from "aws-amplify";
import { Flex } from "@aws-amplify/ui-react";
import { GraphQLQuery } from "@aws-amplify/api";
import { GoogleMap } from "@react-google-maps/api";
import { ToastContainer, toast } from "react-toastify";
import dayjs from "dayjs";
import { listActivities } from "@/graphql/queries";
import { Trip as TripModel } from "@/models";
import { Day as DayModel } from "@/models";
import { Activity as ActivityModel } from "@/models";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { ChangePhotoModal } from "@/components/ChangePhotoModal";
import { MainContent } from "@/components/MainContent";
import { getTripData } from "@/utils/api";

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
  const [{ id, destination, imgUrl, location }, setTrip] =
    useState<TripModel>(initialTrip);
  const [editImageModal, setEditImageModal] = useState(false);
  const [currentDay, setCurrentDay] = useState<DayModel>();
  const [activities, setActivities] = useState<ActivityModel[]>([]);

  const handleOnClickDay = async (day: DayModel) => {
    setCurrentDay(day);
    try {
      const { data } = await API.graphql<GraphQLQuery<any>>({
        query: listActivities,
        variables: { dayId: day.id },
      });
      setActivities(data?.listActivities?.items || []);
    } catch (error) {
      toast.error("There was an error!", { theme: "colored" });
    }
  };

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
          <Sidebar days={days} handleOnClickItem={handleOnClickDay} />
          <MainContent
            title={
              currentDay
                ? dayjs(currentDay?.date).format("dddd, DD MMMM YYYY")
                : ""
            }
            imgUrl={imgUrl}
            setEditImageModal={setEditImageModal}
            activities={activities}
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
            onClick={(e) => {
              console.log(e);
            }}
          />
        </Flex>
      </Flex>
      <ToastContainer />
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
