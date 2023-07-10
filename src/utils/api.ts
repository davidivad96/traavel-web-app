import { AmplifyClass } from "@aws-amplify/core";
import { getPlan, getUser } from "@/graphql/queries";

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

export const getPlanData = async ({ API }: AmplifyClass, planId: string) => {
  const response = await API.graphql({
    query: getPlan,
    variables: { id: planId },
    authMode: "API_KEY",
  });
  if (!response.data.getPlan) {
    throw new Error("Plan not found");
  }
  return response.data.getPlan;
};
