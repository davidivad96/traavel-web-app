import { useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { API, withSSRContext, Cache } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import { Button, Card, Collection, Heading } from "@aws-amplify/ui-react";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlinePlus } from "react-icons/ai";
import { DeletePlanMutation } from "@/API";
import { deletePlan } from "@/graphql/mutations";
import { Plan, User } from "@/models";
import { Navbar } from "@/components/Navbar";
import { NewPlanModal } from "@/components/NewPlanModal";
import { getUserData } from "@/utils/api";

interface Props {
  user: User;
  userPlans: Plan[];
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const SSR = withSSRContext({ req });
  try {
    const user = await getUserData(SSR);
    const userPlans = user.plans.items;
    return { props: { user, userPlans } };
  } catch (error) {
    return { redirect: { permanent: false, destination: "/" } };
  }
};

const Home = ({ user, userPlans }: Props) => {
  const router = useRouter();
  const [plans, setPlans] = useState<Plan[]>(userPlans);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeletePlan = async (planId: string) => {
    try {
      const newPlans = plans.filter((plan) => plan.id !== planId);
      setPlans(newPlans);
      await API.graphql<GraphQLQuery<DeletePlanMutation>>({
        query: deletePlan,
        variables: { input: { id: planId } },
      });
      Cache.removeItem(`places-${planId}`);
      toast.success("Plan deleted successfully", { theme: "colored" });
    } catch (error) {
      toast.error("There was an error!", { theme: "colored" });
    }
  };

  return (
    <>
      <Navbar
        title={`Hello, ${user.name}`}
        showAvatar
        avatarUrl={user.avatarUrl}
        showSignOut
      />
      <Button
        variation="primary"
        onClick={() => setIsOpen(true)}
        margin="20px 0"
      >
        <AiOutlinePlus size={22} style={{ marginRight: "5px" }} /> New plan
      </Button>
      <NewPlanModal isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
      <Collection
        items={plans}
        type="list"
        direction="row"
        gap="20px"
        wrap="nowrap"
      >
        {(plan) => (
          <Card
            key={plan.id}
            borderRadius="medium"
            variation="outlined"
            onClick={() => router.push(`/plan/${plan.id}`)}
            style={{ cursor: "pointer" }}
          >
            <>
              <Heading level={6}>{plan.name}</Heading>
              <Button
                variation="destructive"
                isFullWidth
                marginTop={10}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.stopPropagation();
                  handleDeletePlan(plan.id);
                }}
              >
                Delete plan
              </Button>
            </>
          </Card>
        )}
      </Collection>
      <ToastContainer />
    </>
  );
};

export default Home;
