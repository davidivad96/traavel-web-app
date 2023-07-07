import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { withSSRContext } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { User } from "@/models";
import { getUser } from "@/graphql/queries";

interface Props {
  user: User;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const SSR = withSSRContext({ req });
  try {
    const currentUser = await SSR.Auth.currentAuthenticatedUser();
    const response = await SSR.API.graphql({
      query: getUser,
      variables: { id: currentUser.attributes.sub },
      authMode: "API_KEY",
    });
    return { props: { user: response.data.getUser } };
  } catch (error) {
    return { redirect: { permanent: false, destination: "/" } };
  }
};

const Home = ({ user }: Props) => {
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  const router = useRouter();

  const handleSignOut = async () => {
    signOut();
    router.push("/");
  };

  return (
    <>
      <h1>Hello {user.name}</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
};

export default Home;
