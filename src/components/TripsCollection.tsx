import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Card,
  Collection,
  Flex,
  Heading,
  Text,
  View,
} from "@aws-amplify/ui-react";
import dayjs from "dayjs";
import { MdDelete } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { Trip } from "@/models";
import { getNumberOfDays } from "@/utils/functions";

interface Props {
  trips: Trip[];
  handleDeleteTrip: (tripId: string) => void;
}

export const TripsCollection = ({ trips, handleDeleteTrip }: Props) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState<{
    [id: string]: boolean;
  }>({});

  return (
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
                flex={1}
                justifyContent="center"
                alignItems="center"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteTrip(trip.id);
                }}
              >
                <MdDelete width="100%" color="#FFF" />
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
  );
};
