import { useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { withSSRContext } from "aws-amplify";
import { Flex, View } from "@aws-amplify/ui-react";
import { GoogleMap } from "@react-google-maps/api";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { FaRoute, FaEdit } from "react-icons/fa";
import dayjs from "dayjs";
import { Trip as TripModel } from "@/models";
import { Navbar } from "@/components/Navbar";
import { ChangePhotoModal } from "@/components/ChangePhotoModal";
import { getTripData } from "@/utils/api";
import { generateDates } from "@/utils/functions";

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
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);
  const [editImageModal, setEditImageModal] = useState(false);

  const dates = [];
  dates.push(
    ...generateDates(new Date(startDate!), new Date(endDate!)).map((date) => ({
      date: dayjs(date).format("ddd DD/MM"),
      activities: [],
    }))
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
          <Sidebar collapsed={collapsedSidebar as boolean} width="200px">
            <Flex
              direction="column"
              justifyContent="space-between"
              height="100%"
            >
              <Menu>
                <SubMenu label="Itinerary" icon={<FaRoute />}>
                  {dates.map(({ date, activities }) => (
                    <SubMenu label={date} key={date}>
                      {activities.map(
                        ({ name, description, startTime, endTime }) => (
                          <MenuItem key={name}>
                            {startTime} - {endTime} {name} - {description}
                          </MenuItem>
                        )
                      )}
                    </SubMenu>
                  ))}
                </SubMenu>
              </Menu>
              <Menu
                onClick={() => setCollapsedSidebar(!collapsedSidebar)}
                style={{ bottom: 0, width: "100%" }}
              >
                <MenuItem
                  icon={collapsedSidebar ? <FaAnglesRight /> : <FaAnglesLeft />}
                >
                  Collapse
                </MenuItem>
              </Menu>
            </Flex>
          </Sidebar>
          <View
            width="100%"
            height={240}
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
