import { AmplifyClass } from "@aws-amplify/core";
import { getTrip, getUser } from "@/graphql/queries";

export const getUserData = async ({ Auth, API }: AmplifyClass) => {
  const currentUser = await Auth.currentAuthenticatedUser();
  const response = await API.graphql({
    query: getUser,
    variables: { id: currentUser.attributes.sub },
    authMode: "API_KEY",
  });
  if (!response.data.getUser) {
    throw new Error("User not found");
  }
  return response.data.getUser;
};

export const getTripData = async ({ API }: AmplifyClass, tripId: string) => {
  const response = await API.graphql({
    query: getTrip,
    variables: { id: tripId },
    authMode: "API_KEY",
  });
  if (!response.data.getTrip) {
    throw new Error("Trip not found");
  }
  return response.data.getTrip;
};
