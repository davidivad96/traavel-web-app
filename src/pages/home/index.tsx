import { useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { withSSRContext } from "aws-amplify";
import { API } from "@aws-amplify/api";
import {
  Button,
  Card,
  Collection,
  Flex,
  Heading,
  ScrollView,
  Text,
} from "@aws-amplify/ui-react";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlinePlus } from "react-icons/ai";
import { Trip, User } from "@/models";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NewTripModal } from "@/components/NewTripModal";
import { getUserData, getUserTripsData } from "@/utils/api";
import awsconfig from "@/aws-exports";

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
  const router = useRouter();
  const [trips, setTrips] = useState<Trip[]>(userTrips);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteTrip = async (tripId: string) => {
    try {
      setTrips((trips) => trips.filter((trip) => trip.id !== tripId));
      toast.success("Trip deleted successfully", { theme: "colored" });
      // In the background, delete all days of the trip
      API.del(
        awsconfig.aws_cloud_logic_custom[0].name,
        `/trip?tripId=${tripId}`,
        { headers: {} }
      );
    } catch (error) {
      toast.error("There was an error!", { theme: "colored" });
    }
  };

  return (
    <>
      <NewTripModal isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
      <ScrollView height="calc(100vh - 140px)" padding="40px 60px">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          height={50}
          marginBottom={15}
        >
          <Heading level={4}>My trips</Heading>
          <Button variation="primary" onClick={() => setIsOpen(true)}>
            <AiOutlinePlus size={22} style={{ marginRight: "5px" }} /> New trip
          </Button>
        </Flex>
        <Collection
          items={trips}
          type="grid"
          templateColumns={{
            base: "1fr",
            small: "1fr 1fr",
            medium: "1fr 1fr 1fr",
            large: "1fr 1fr 1fr 1fr",
          }}
          gap="20px"
          searchNoResultsFound={
            <Text textAlign="center">
              No trips yet. Try creating a new one!
            </Text>
          }
        >
          {(trip) => (
            <Card
              key={trip.id}
              borderRadius="medium"
              variation="outlined"
              onClick={() => router.push(`/trip/${trip.id}`)}
              display="flex"
              style={{
                cursor: "pointer",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <>
                <Heading level={5}>{trip.name}</Heading>
                <Image
                  src={trip.imgUrl || "/images/default_trip_image.png"}
                  width={200}
                  height={200}
                  alt="Trip image"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL="/images/default_trip_image.png"
                />
                <Button
                  variation="destructive"
                  isFullWidth
                  marginTop={10}
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.stopPropagation();
                    handleDeleteTrip(trip.id);
                  }}
                >
                  Delete trip
                </Button>
              </>
            </Card>
          )}
        </Collection>
      </ScrollView>
      <ToastContainer />
    </>
  );
};

interface LayoutProps {
  userName: string;
  userAvatarUrl: string;
  children: React.ReactNode;
}

const Layout = ({ userName, userAvatarUrl, children }: LayoutProps) => (
  <>
    <Navbar
      title={`Hello, ${userName}`}
      showAvatar
      avatarUrl={userAvatarUrl}
      showSignOut
    />
    <Footer />
    {children}
  </>
);

Home.getLayout = (page: React.ReactNode, { user }: Props) => (
  <Layout
    userName={user.name || "anonymous user"}
    userAvatarUrl={user.avatarUrl || "/images/default_avatar_image.png"}
  >
    {page}
  </Layout>
);

export default Home;
