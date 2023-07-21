import { useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { withSSRContext } from "aws-amplify";
import { API } from "@aws-amplify/api";
import { Button, Flex, Heading, ScrollView, View } from "@aws-amplify/ui-react";
import { toast } from "react-toastify";
import { AiOutlinePlus } from "react-icons/ai";
import { Trip, User } from "@/models";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TripsCollection } from "@/components/TripsCollection";
import { NewTripModal } from "@/components/NewTripModal";
import { getUserData, getUserTripsData } from "@/utils/api";
import awsconfig from "@/aws-exports";
import { addDaysToDate } from "@/utils/functions";

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const SSR = withSSRContext({ req });
  try {
    const user = await getUserData(SSR);
    const trips = await getUserTripsData(SSR, user.id);
    return { props: { user, trips } };
  } catch (error) {
    return { redirect: { permanent: false, destination: "/" } };
  }
};

interface Props {
  user: User;
  trips: Trip[];
}

const Home = ({ user, trips: userTrips }: Props) => {
  const [trips, setTrips] = useState<Trip[]>(userTrips);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteTrip = async (tripId: string) => {
    try {
      setTrips((trips) => trips.filter((trip) => trip.id !== tripId));
      toast.success("Trip deleted successfully", { theme: "colored" });
      localStorage.removeItem(`photos-${tripId}`);
      // In the background, delete all days, activities and the own trip
      API.del(
        awsconfig.aws_cloud_logic_custom[0].name,
        `/trip?tripId=${tripId}`,
        { headers: {} }
      );
    } catch (error) {
      toast.error("There was an error!", { theme: "colored" });
    }
  };

  const [pastTrips, upcomingTrips] = useMemo(
    () => [
      trips.filter(
        (trip) => addDaysToDate(new Date(trip.endDate), 1) < new Date()
      ),
      trips.filter(
        (trip) => addDaysToDate(new Date(trip.endDate), 1) >= new Date()
      ),
    ],
    [trips]
  );

  return (
    <>
      <NewTripModal isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
      <ScrollView
        height="calc(100vh - 250px)"
        padding="20px 60px"
        style={
          trips.length === 0
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }
            : {}
        }
      >
        {trips.length === 0 ? (
          <>
            <Heading level={4} marginTop={15} maxWidth={460} textAlign="center">
              Create your first trip and start planning your next adventure!
            </Heading>
            <Image
              src="/images/empty_state_image.svg"
              width={350}
              height={350}
              alt="Main page empty state image"
            />
            <Button
              variation="primary"
              onClick={() => setIsOpen(true)}
              margin="30px 0"
            >
              <AiOutlinePlus size={22} style={{ marginRight: "5px" }} /> Create
              my first trip
            </Button>
          </>
        ) : (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            height={50}
            marginBottom={15}
          >
            <Heading level={3} opacity={upcomingTrips.length === 0 ? 0.5 : 1}>
              My trips
            </Heading>
            <Button variation="primary" onClick={() => setIsOpen(true)}>
              <AiOutlinePlus size={22} style={{ marginRight: "5px" }} /> New
              trip
            </Button>
          </Flex>
        )}
        <TripsCollection
          trips={upcomingTrips}
          handleDeleteTrip={handleDeleteTrip}
        />
        {pastTrips.length !== 0 && (
          <View marginTop={50}>
            <Heading level={3} marginBottom={15}>
              Past trips
            </Heading>
            <TripsCollection
              trips={pastTrips}
              handleDeleteTrip={handleDeleteTrip}
            />
          </View>
        )}
      </ScrollView>
    </>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar showLogo showSignOut />
    <Footer />
    {children}
  </>
);

Home.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Home;
