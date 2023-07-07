import { AmplifyClass } from "@aws-amplify/core";
import { getUser } from "./graphql/queries";

export const getUserData = async (SSR: AmplifyClass) => {
  const currentUser = await SSR.Auth.currentAuthenticatedUser();
  const response = await SSR.API.graphql({
    query: getUser,
    variables: { id: currentUser.attributes.sub },
    authMode: "API_KEY",
  });
  return response.data.getUser;
};
