import { AmplifyClass } from "@aws-amplify/core";
import { getTrip, getUser, listDays, tripsByOwnerId } from "@/graphql/queries";

export const getUserData = async ({ Auth, API }: AmplifyClass) => {
  const currentUser = await Auth.currentAuthenticatedUser();
  const response = await API.graphql({
    query: getUser,
    variables: { id: currentUser.attributes.sub },
  });
  if (!response.data.getUser) {
    throw new Error("User not found");
  }
  return response.data.getUser;
};

export const getUserTripsData = async (
  { API }: AmplifyClass,
  ownerId: string
) => {
  const response = await API.graphql({
    query: tripsByOwnerId,
    variables: { ownerId },
  });
  if (!response.data.tripsByOwnerId) {
    throw new Error("Trips not found");
  }
  return response.data.tripsByOwnerId.items;
};

export const getTripData = async ({ API }: AmplifyClass, tripId: string) => {
  const {
    data: { getTrip: getTripResult },
  } = await API.graphql({
    query: getTrip,
    variables: { id: tripId },
  });
  const {
    data: {
      listDays: { items: listDaysResult },
    },
  } = await API.graphql({
    query: listDays,
    variables: { tripId },
  });
  if (!getTripResult || !listDaysResult) {
    throw new Error("Trip not found");
  }
  return [getTripResult, listDaysResult];
};
