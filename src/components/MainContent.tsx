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
import { FaMasksTheater, FaPeopleGroup } from "react-icons/fa6";
import { AiOutlinePlus, AiFillStar, AiFillHome } from "react-icons/ai";
import { IoBeer, IoBoat, IoMusicalNotes } from "react-icons/io5";
import { ImLibrary } from "react-icons/im";
import {
  MdEdit,
  MdDelete,
  MdFlight,
  MdRestaurant,
  MdQuestionMark,
} from "react-icons/md";
import dayjs from "dayjs";
import { Activity as ActivityModel, ActivityType } from "@/models";
import { IconButton } from "@mui/material";

const ACTIVITY_TYPE_TO_ICON: Record<ActivityType, React.ReactNode> = {
  [ActivityType.FLIGHT]: <MdFlight />,
  [ActivityType.HOTEL]: <AiFillHome />,
  [ActivityType.MUSEUM]: <ImLibrary />,
  [ActivityType.VISIT]: <AiFillStar />,
  [ActivityType.RESTAURANT]: <MdRestaurant />,
  [ActivityType.BAR]: <IoBeer />,
  [ActivityType.CONCERT]: <IoMusicalNotes />,
  [ActivityType.MEETING]: <FaPeopleGroup />,
  [ActivityType.THEATER]: <FaMasksTheater />,
  [ActivityType.CRUISE]: <IoBoat />,
  [ActivityType.OTHER]: <MdQuestionMark />,
};

interface Props {
  title?: string;
  imgUrl?: string | null;
  isLoadingActivities?: boolean;
  openEditImageModal: () => void;
  handleOnClickNewActivity: () => void;
  handleOnClickEditActivity: (activity: ActivityModel) => void;
  activities: ActivityModel[];
  removeActivity: (activityId: string) => void;
  setMapCenter: (center: google.maps.LatLngLiteral) => void;
}

export const MainContent = ({
  title,
  imgUrl,
  isLoadingActivities = false,
  openEditImageModal,
  handleOnClickNewActivity,
  handleOnClickEditActivity,
  activities,
  removeActivity,
  setMapCenter,
}: Props) => {
  const handleOnRemoveActivityButton = async (activityId: string) => {
    try {
      removeActivity(activityId);
      await API.graphql<GraphQLQuery<DeleteActivityMutation>>({
        query: deleteActivity,
        variables: { input: { id: activityId } },
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
            height="calc(100vh - 110px)"
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
              <Expander id="activity-expander" type="multiple">
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
                        <Flex direction="row" alignItems="center">
                          <Flex alignItems="center">
                            {ACTIVITY_TYPE_TO_ICON[activity.type]}
                            <Text>
                              {dayjs(new Date(activity.startTime)).format(
                                "HH:mm"
                              )}{" "}
                              -{" "}
                              {dayjs(new Date(activity.endTime)).format(
                                "HH:mm"
                              )}
                            </Text>
                          </Flex>
                          <Text fontWeight="bold" isTruncated>
                            {activity.name}
                          </Text>
                        </Flex>
                        <Flex direction="row" style={{ gap: 0 }}>
                          <IconButton
                            size="small"
                            style={{ color: "#367B92" }}
                            onClick={(e: React.MouseEvent<HTMLElement>) => {
                              e.stopPropagation();
                              handleOnClickEditActivity(activity);
                            }}
                          >
                            <MdEdit />
                          </IconButton>
                          <IconButton
                            size="small"
                            style={{ color: "#D65745" }}
                            onClick={(e: React.MouseEvent<HTMLElement>) => {
                              e.stopPropagation();
                              handleOnRemoveActivityButton(activity.id);
                            }}
                          >
                            <MdDelete />
                          </IconButton>
                        </Flex>
                      </Flex>
                    }
                    value={`${activity.dayId}-${index}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setMapCenter({
                        lat: activity.location.latitude!,
                        lng: activity.location.longitude!,
                      });
                    }}
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
