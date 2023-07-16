import { useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { API, withSSRContext } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  Button,
  Card,
  Collection,
  Flex,
  Heading,
  ScrollView,
  View,
} from "@aws-amplify/ui-react";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlinePlus } from "react-icons/ai";
import { DeleteTripMutation } from "@/API";
import { deleteTrip } from "@/graphql/mutations";
import { Trip, User } from "@/models";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NewTripModal } from "@/components/NewTripModal";
import { getUserData } from "@/utils/api";

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const SSR = withSSRContext({ req });
  try {
    const user = await getUserData(SSR);
    const userTrips = user.trips.items;
    return { props: { user, userTrips } };
  } catch (error) {
    return { redirect: { permanent: false, destination: "/" } };
  }
};

interface Props {
  user: User;
  userTrips: Trip[];
}

const Home = ({ user, userTrips }: Props) => {
  const router = useRouter();
  const [trips, setTrips] = useState<Trip[]>(userTrips);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteTrip = async (tripId: string) => {
    try {
      setTrips((trips) => trips.filter((trip) => trip.id !== tripId));
      toast.success("Trip deleted successfully", { theme: "colored" });
      await API.graphql<GraphQLQuery<DeleteTripMutation>>({
        query: deleteTrip,
        variables: { input: { id: tripId } },
      });
    } catch (error) {
      toast.error("There was an error!", { theme: "colored" });
    }
  };

  return (
    <>
      <NewTripModal isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
      <ScrollView height="calc(100vh - 180px)" padding="40px 60px">
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
