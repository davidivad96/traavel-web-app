import Image from "next/image";
import { API } from "aws-amplify";
import {
  Flex,
  View,
  Expander,
  ExpanderItem,
  Heading,
  Text,
  Button,
  Loader,
} from "@aws-amplify/ui-react";
import { GraphQLQuery } from "@aws-amplify/api";
import { DeleteActivityMutation } from "@/API";
import { deleteActivity } from "@/graphql/mutations";
import { toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
import dayjs from "dayjs";
import { Activity } from "@/models";
import { IconButton } from "@mui/material";

interface Props {
  title?: string;
  imgUrl?: string | null;
  isLoadingActivities?: boolean;
  openEditImageModal: () => void;
  handleOnClickNewActivity: () => void;
  activities: Activity[];
  removeActivity: (activityId: string) => void;
}

export const MainContent = ({
  title,
  imgUrl,
  isLoadingActivities = false,
  openEditImageModal,
  handleOnClickNewActivity,
  activities,
  removeActivity,
}: Props) => {
  const handleOnClickEditActivityButton = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.stopPropagation();
  };

  const handleOnremoveButton = async (
    activityId: string,
    dayId: string,
    startTime: string
  ) => {
    try {
      removeActivity(activityId);
      await API.graphql<GraphQLQuery<DeleteActivityMutation>>({
        query: deleteActivity,
        variables: { input: { dayId, startTime } },
      });
      toast.success("Activity deleted!", { theme: "colored" });
    } catch (error) {
      toast.error("There was an error!", { theme: "colored" });
    }
  };

  return (
    <>
      <Flex direction="column" flex={1}>
        <View
          width="100%"
          minHeight={220}
          position="relative"
          onClick={openEditImageModal}
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
        {title ? (
          <View
            padding="0 30px 20px 30px"
            height="calc(100vh - 70px)"
            style={{ overflowY: "scroll" }}
          >
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              margin="10px 0"
            >
              <Heading level={4}>{title}</Heading>
              <Button variation="link" onClick={handleOnClickNewActivity}>
                <AiOutlinePlus size={22} style={{ marginRight: "5px" }} /> New
                activity
              </Button>
            </Flex>
            {isLoadingActivities ? (
              <Flex justifyContent="center" marginTop={20}>
                <Loader width={50} height={50} />
              </Flex>
            ) : (
              <Expander id="activity-expander" type="single">
                {activities.map((activity, index) => (
                  <ExpanderItem
                    key={`${activity.dayId}-${index}`}
                    title={
                      <Flex
                        direction="row"
                        flex={1}
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Flex direction="row">
                          <Text>
                            {dayjs(new Date(activity.startTime)).format(
                              "HH:mm"
                            )}{" "}
                            -{" "}
                            {dayjs(new Date(activity.endTime)).format("HH:mm")}:{" "}
                          </Text>
                          <Text fontWeight="bold">{activity.name}</Text>
                        </Flex>
                        <Flex direction="row" style={{ gap: 0 }}>
                          <IconButton
                            size="small"
                            style={{ color: "#367B92" }}
                            onClick={handleOnClickEditActivityButton}
                          >
                            <MdEdit />
                          </IconButton>
                          <IconButton
                            size="small"
                            style={{ color: "#D65745" }}
                            onClick={(e: React.MouseEvent<HTMLElement>) => {
                              e.stopPropagation();
                              handleOnremoveButton(
                                activity.id,
                                activity.dayId,
                                activity.startTime
                              );
                            }}
                          >
                            <MdDelete />
                          </IconButton>
                        </Flex>
                      </Flex>
                    }
                    value={`${activity.dayId}-${index}`}
                    style={{ cursor: "pointer" }}
                  >
                    {activity.description ? (
                      <Text>{activity.description}</Text>
                    ) : (
                      <Text fontStyle="italic">No description provided</Text>
                    )}
                  </ExpanderItem>
                ))}
              </Expander>
            )}
          </View>
        ) : (
          <Text textAlign="center">Select a date on the sidebar</Text>
        )}
      </Flex>
    </>
  );
};
