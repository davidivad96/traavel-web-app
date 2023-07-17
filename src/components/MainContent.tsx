import Image from "next/image";
import {
  Flex,
  View,
  Expander,
  ExpanderItem,
  Heading,
  Text,
} from "@aws-amplify/ui-react";
import { FaEdit } from "react-icons/fa";
import { Activity } from "@/models";

interface Props {
  title?: string;
  imgUrl?: string | null;
  setEditImageModal: (value: boolean) => void;
  activities: Activity[];
}

export const MainContent = ({
  title,
  imgUrl,
  setEditImageModal,
  activities,
}: Props) => (
  <Flex direction="column" flex={1}>
    <View
      width="100%"
      minHeight={220}
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
      <Flex id="edit-image-button" justifyContent="center" alignItems="center">
        <FaEdit width="100%" color="#FFF" />
      </Flex>
    </View>
    {title ? (
      <View
        padding="0 30px 20px 30px"
        height="calc(100vh - 70px)"
        style={{ overflowY: "scroll" }}
      >
        <Heading level={3} textAlign="center" marginBottom={10}>
          {title}
        </Heading>
        <Expander type="single">
          {activities.map((activity, index) => (
            <ExpanderItem
              key={`${activity.dayId}-${index}`}
              title={
                <Text>
                  {activity.startTime} - {activity.endTime}
                </Text>
              }
              value={`${activity.dayId}-${index}`}
            >
              <Text>{activity.name}</Text>
              <Text>{activity.description}</Text>
            </ExpanderItem>
          ))}
        </Expander>
      </View>
    ) : (
      <Text textAlign="center">Select a date on the sidebar</Text>
    )}
  </Flex>
);
