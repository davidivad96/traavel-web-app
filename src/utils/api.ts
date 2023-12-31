import { AmplifyClass } from "@aws-amplify/core";
import {
  daysByTripIdAndDate,
  getTrip,
  getUser,
  tripsByUserIdAndStartDate,
} from "@/graphql/queries";

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
  userId: string
) => {
  const response = await API.graphql({
    query: tripsByUserIdAndStartDate,
    variables: { userId },
  });
  if (!response.data.tripsByUserIdAndStartDate) {
    throw new Error("Trips not found");
  }
  return response.data.tripsByUserIdAndStartDate.items;
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
      daysByTripIdAndDate: { items: daysByTripIdAndDateResult },
    },
  } = await API.graphql({
    query: daysByTripIdAndDate,
    variables: { tripId },
  });
  if (!getTripResult || !daysByTripIdAndDateResult) {
    throw new Error("Trip not found");
  }
  return [getTripResult, daysByTripIdAndDateResult];
};
