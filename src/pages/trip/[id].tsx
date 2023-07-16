import { useState } from "react";
import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { Flex } from "@aws-amplify/ui-react";
import { GoogleMap } from "@react-google-maps/api";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { FaRoute } from "react-icons/fa";
import dayjs from "dayjs";
import { Trip as TripModel } from "@/models";
import { Navbar } from "@/components/Navbar";
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

const Trip = ({ trip: { location, startDate, endDate } }: Props) => {
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);

  const dates = [];
  if (startDate && endDate) {
    dates.push(
      ...generateDates(new Date(startDate), new Date(endDate)).map((date) => ({
        date: dayjs(date).format("ddd DD/MM"),
        activities: [
          {
            name: "breakfast",
            description: "having breakfast",
            startTime: "08:00",
            endTime: "09:00",
            notes: "bring your own food",
          },
          {
            name: "lunch",
            description: "having lunch",
            startTime: "12:00",
            endTime: "13:00",
            notes: "bring your own food",
          },
          {
            name: "dinner",
            description: "having dinner",
            startTime: "18:00",
            endTime: "19:00",
            notes: "bring your own food",
          },
        ],
      }))
    );
  }

  return (
    <Flex direction="row" height="calc(100vh - 70px)" overflow="hidden">
      <Flex flex={1} style={{ overflowY: "scroll" }}>
        <Sidebar collapsed={collapsedSidebar as boolean}>
          <Flex direction="column" justifyContent="space-between" height="100%">
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
                Collapse sidebar
              </MenuItem>
            </Menu>
          </Flex>
        </Sidebar>
      </Flex>
      <Flex flex={1}>
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
