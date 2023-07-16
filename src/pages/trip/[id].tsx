import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { Card, Collection, Flex } from "@aws-amplify/ui-react";
import { GoogleMap } from "@react-google-maps/api";
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

const Trip = ({ trip: { name, location, startDate, endDate } }: Props) => {
  const dates = [];
  if (startDate && endDate) {
    dates.push(
      ...generateDates(new Date(startDate), new Date(endDate)).map((date) => ({
        date,
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
    <Flex direction="row" alignItems="flex-start">
      <Flex direction="column" flex={5}>
        <Navbar title={name || ""} showGoBack />
        <Collection items={dates} type="list" gap="20px">
          {(item) => (
            <Card key={item.date.toDateString()} variation="elevated">
              <h2>{item.date.toDateString()}</h2>
              {item.activities.map(
                ({ name, description, startTime, endTime, notes }) => (
                  <Card key={name}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>
                      {startTime} - {endTime}
                    </p>
                    <p>{notes}</p>
                  </Card>
                )
              )}
            </Card>
          )}
        </Collection>
      </Flex>
      <Flex flex={4} height="100vh" width="100%">
        <GoogleMap
          mapContainerStyle={{ width: "100%" }}
          center={{
            lat: location?.latitude || 0,
            lng: location?.longitude || 0,
          }}
          zoom={13}
          onLoad={(evt) => console.log("loaded, ", evt)}
        />
      </Flex>
    </Flex>
  );
};

export default Trip;
