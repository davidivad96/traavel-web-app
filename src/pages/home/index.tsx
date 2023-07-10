import { useState } from "react";
import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { Button } from "@aws-amplify/ui-react";
import { AiOutlinePlus } from "react-icons/ai";
import { User } from "@/models";
import { Navbar } from "@/components/Navbar";
import { NewPlanModal } from "@/components/NewPlanModal";
import { getUserData } from "@/utils/api";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar name={user.name} avatarUrl={user.avatarUrl} />
      <Button variation="primary" onClick={() => setIsOpen(true)}>
        <AiOutlinePlus size={22} style={{ marginRight: "5px" }} /> New plan
      </Button>
      <NewPlanModal isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
    </>
  );
};

export default Home;
