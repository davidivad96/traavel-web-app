import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { withSSRContext } from "aws-amplify";
import {
  useAuthenticator,
  Button,
  Heading,
  Image,
} from "@aws-amplify/ui-react";
import { User } from "@/models";
import { getUserData } from "@/utils";

interface Props {
  user: User;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const SSR = withSSRContext({ req });
  try {
    const user = await getUserData(SSR);
    return { props: { user } };
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
      <Heading level={1}>Hello {user.name}</Heading>
      <Image
        src={user.avatarUrl || "/images/default_avatar_image.png"}
        alt="Profile image"
        width="50px"
      />
      <Button onClick={handleSignOut}>Sign out</Button>
    </>
  );
};

export default Home;
