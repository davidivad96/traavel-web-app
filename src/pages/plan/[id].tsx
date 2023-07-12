import { useCallback, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { Place } from "@googlemaps/google-maps-services-js";
import { withSSRContext, Cache } from "aws-amplify";
import { Flex } from "@aws-amplify/ui-react";
import { Plan as PlanModel } from "@/models";
import { Navbar } from "@/components/Navbar";
import { getPlanData } from "@/utils/api";
import { PLACE_TYPES, PlacesByType } from "@/types";

const getIcon = (type?: PLACE_TYPES) => {
  switch (type) {
    case PLACE_TYPES.TOURIST_ATTRACTION:
      return "/icons/photography.png";
    case PLACE_TYPES.RESTAURANT:
      return "/icons/restaurants.png";
    case PLACE_TYPES.CAFE:
      return "/icons/coffee-n-tea.png";
    case PLACE_TYPES.BAR:
      return "/icons/bars.png";
    case PLACE_TYPES.LODGING:
      return "/icons/hotels.png";
    case PLACE_TYPES.SHOPPING_MALL:
      return "/icons/shopping.png";
    case PLACE_TYPES.NIGHT_CLUB:
      return "/icons/nightlife.png";
    case PLACE_TYPES.MUSEUM:
      return "/icons/museums.png";
    default:
      return "/icons/default.png";
  }
};

const mapStyles = [
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative",
    stylers: [{ visibility: "off" }],
  },
];

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
    return { props: { plan } };
  } catch (error) {
    console.log(error);
    return { redirect: { permanent: false, destination: "/" } };
  }
};

const Plan = ({ plan: { id, name, destination, location } }: Props) => {
  const [places, setPlaces] = useState<PlacesByType>({} as PlacesByType);

  const fetchAndCachePlaces = useCallback(async () => {
    const cachedPlaces: PlacesByType = Cache.getItem(`places-${id}`);
    if (!cachedPlaces) {
      console.log("fetching places");
      const newPlaces: PlacesByType = Object.values(PLACE_TYPES).reduce(
        (acc, type) => ({ ...acc, [type]: [] }),
        {} as PlacesByType
      );
      for (const type of Object.values(PLACE_TYPES)) {
        const query = `${type}s in ${destination}`;
        const { data } = await axios.get<Place[]>(`/api/places`, {
          params: {
            query,
            lat: location?.latitude,
            lng: location?.longitude,
          },
        });
        data.forEach((result) => {
          if (
            !newPlaces[type].find((place) => place.place_id === result.place_id)
          ) {
            newPlaces[type].push(result);
          }
        });
        setPlaces(newPlaces);
      }
      Cache.setItem(`places-${id}`, newPlaces);
    } else {
      setPlaces(cachedPlaces);
    }
  }, [id, destination, location?.latitude, location?.longitude]);

  useEffect(() => {
    fetchAndCachePlaces();
  }, [fetchAndCachePlaces]);

  return (
    <Flex direction="row" alignItems="flex-start">
      <Flex flex={5}>
        <Navbar title={name || ""} showGoBack />
      </Flex>
      <Flex flex={4} height="100vh" width="100%">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={{
            lat: location?.latitude || 0,
            lng: location?.longitude || 0,
          }}
          zoom={13}
          options={{ styles: mapStyles }}
        >
          {Object.entries(places).map(([type, places]) => {
            return places.map((place) => {
              if (!place?.geometry?.location) return null;
              return (
                <MarkerF
                  key={place.place_id}
                  position={place.geometry.location}
                  animation={google.maps.Animation.DROP}
                  title={place.name}
                  icon={{
                    url: getIcon(type as PLACE_TYPES),
                    scaledSize: new google.maps.Size(30, 40),
                  }}
                />
              );
            });
          })}
        </GoogleMap>
      </Flex>
    </Flex>
  );
};

export default Plan;
