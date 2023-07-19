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
  View,
} from "@aws-amplify/ui-react";
import { toast } from "react-toastify";
import { AiOutlinePlus } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import dayjs from "dayjs";
import { Trip, User } from "@/models";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NewTripModal } from "@/components/NewTripModal";
import { getUserData, getUserTripsData } from "@/utils/api";
import awsconfig from "@/aws-exports";
import { getNumberOfDays } from "@/utils/functions";

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
  const [isHovered, setIsHovered] = useState<{
    [id: string]: boolean;
  }>({});

  const handleDeleteTrip = async (tripId: string) => {
    try {
      setTrips((trips) => trips.filter((trip) => trip.id !== tripId));
      toast.success("Trip deleted successfully", { theme: "colored" });
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
            <Image
              src="/images/empty_state_image.svg"
              width={350}
              height={350}
              alt="Main page empty state image"
            />
            <Heading level={4} marginBottom={15}>
              You don&apos;t have any trips yet
            </Heading>
            <Text marginBottom={15}>
              Create your first trip and start planning your next adventure!
            </Text>
            <Button
              variation="primary"
              onClick={() => setIsOpen(true)}
              marginBottom={30}
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
            <Heading level={4}>My trips</Heading>
            <Button variation="primary" onClick={() => setIsOpen(true)}>
              <AiOutlinePlus size={22} style={{ marginRight: "5px" }} /> New
              trip
            </Button>
          </Flex>
        )}
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
          searchNoResultsFound={<></>}
        >
          {(trip) => {
            const totalDays = getNumberOfDays(
              new Date(trip.startDate),
              new Date(trip.endDate)
            );
            return (
              <Card
                key={trip.id}
                style={{ cursor: "pointer", position: "relative", padding: 0 }}
                onClick={() => router.push(`/trip/${trip.id}`)}
                onMouseEnter={() => setIsHovered({ [trip.id]: true })}
                onMouseLeave={() => setIsHovered({ [trip.id]: false })}
              >
                {isHovered[trip.id] && (
                  <Flex
                    id="edit-image-button"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MdDelete
                      width="100%"
                      color="#FFF"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTrip(trip.id);
                      }}
                    />
                  </Flex>
                )}
                <View minHeight="15rem" position="relative" marginBottom={15}>
                  <Image
                    src={trip.imgUrl || "/images/default_trip_image.png"}
                    fill
                    alt="Trip image"
                    style={{ objectFit: "cover", borderRadius: "5px" }}
                    placeholder="blur"
                    blurDataURL="/images/default_trip_image.png"
                  />
                </View>
                <Heading level={5}>{trip.destination}</Heading>
                <Flex direction="row" alignItems="center" style={{ gap: 8 }}>
                  <FiCalendar />
                  <Text>
                    {dayjs(trip.startDate).format("DD MMM YYYY")}{" "}
                    <span style={{ fontWeight: 100 }}>•</span>{" "}
                    <span>
                      {totalDays} {totalDays === 1 ? "day" : "days"}
                    </span>
                  </Text>
                </Flex>
              </Card>
            );
          }}
        </Collection>
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
