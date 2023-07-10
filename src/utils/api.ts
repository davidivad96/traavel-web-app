import { AmplifyClass } from "@aws-amplify/core";
import { getUser } from "@/graphql/queries";

export const getUserData = async ({ Auth, API }: AmplifyClass) => {
  const currentUser = await Auth.currentAuthenticatedUser();
  const response = await API.graphql({
    query: getUser,
    variables: { id: currentUser.attributes.sub },
    authMode: "API_KEY",
  });
  return response.data.getUser;
};
