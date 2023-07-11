import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { withSSRContext, Cache } from "aws-amplify";
import { Flex } from "@aws-amplify/ui-react";
import { Plan as PlanModel } from "@/models";
import { Navbar } from "@/components/Navbar";
import { getPlanData } from "@/utils/api";
import { PlacesSearchResponse } from "@/types";

interface Props {
  plan: PlanModel;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  query,
}) => {
  const SSR = withSSRContext({ req });
  const planId = query.id as string;
  try {
    const plan = await getPlanData(SSR, planId);
    return { props: { plan, isLoaded: false } };
  } catch (error) {
    console.log(error);
    return { redirect: { permanent: false, destination: "/" } };
  }
};

const Plan = ({ plan }: Props) => {
  const [places, setPlaces] = useState<PlacesSearchResponse["results"]>([]);

  useEffect(() => {
    const places: PlacesSearchResponse["results"] =
      Cache.getItem(`places-${plan.id}`) || [];
    if (!places.length) {
      console.log("fetching places");
      axios
        .get(
          `/api/places?lat=${plan.location?.latitude}&lng=${plan.location?.longitude}`
        )
        .then(({ data }) => {
          Cache.setItem(`places-${plan.id}`, data);
          setPlaces(data);
        });
    } else {
      setPlaces(places);
    }
  }, [plan.id, plan.location]);

  return (
    <Flex direction="row" alignItems="flex-start">
      <Flex flex={5}>
        <Navbar title={plan.name || ""} showGoBack />
      </Flex>
      <Flex flex={4} height="100vh" width="100%">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={{
            lat: plan.location?.latitude || 0,
            lng: plan.location?.longitude || 0,
          }}
          zoom={12}
        >
          {places.map((place) => {
            if (!place?.geometry?.location) return null;
            return (
              <MarkerF
                key={place.place_id}
                position={place.geometry.location}
                animation={google.maps.Animation.DROP}
              />
            );
          })}
        </GoogleMap>
      </Flex>
    </Flex>
  );
};

export default Plan;
