import { GetServerSideProps } from "next";
import axios from "axios";
import { Plan } from "@/models";
import { withSSRContext } from "aws-amplify";
import GoogleMap from "google-map-react";
import { Navbar } from "@/components/Navbar";
import { getPlanData } from "@/utils/api";
import { Flex } from "@aws-amplify/ui-react";
import { Place } from "@/types";

interface Props {
  plan: Plan;
  place: Place;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  query,
}) => {
  const SSR = withSSRContext({ req });
  const planId = query.id as string;
  try {
    const plan = await getPlanData(SSR, planId);
    const {
      data: { result: place },
    } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${plan.placeId}&key=${process.env.GOOGLE_API_KEY}`
    );
    return { props: { plan, place } };
  } catch (error) {
    console.log(error);
    return { redirect: { permanent: false, destination: "/" } };
  }
};

const PlanPage = ({ plan, place }: Props) => {
  return (
    <Flex direction="row" alignItems="flex-start">
      <Flex flex={5}>
        <Navbar title={plan.name} showGoBack />
      </Flex>
      <Flex flex={4} height="100vh" width="100%">
        <GoogleMap
          defaultCenter={{
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
          }}
          defaultZoom={10}
        />
      </Flex>
    </Flex>
  );
};

export default PlanPage;
