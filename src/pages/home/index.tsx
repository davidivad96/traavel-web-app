import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { Button } from "@aws-amplify/ui-react";
import { User } from "@/models";
import { Navbar } from "@/components/Navbar";
import { getUserData } from "@/utils";
import { AiOutlinePlus } from "react-icons/ai";

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
  return (
    <>
      <Navbar name={user.name} avatarUrl={user.avatarUrl} />
      <Button variation="primary">
        <AiOutlinePlus size={22} style={{ marginRight: "5px" }} /> New plan
      </Button>
    </>
  );
};

export default Home;
