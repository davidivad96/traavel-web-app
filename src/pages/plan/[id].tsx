import { GetServerSideProps } from "next";
import { Plan } from "@/models";
import { withSSRContext } from "aws-amplify";
import { Navbar } from "@/components/Navbar";
import { getPlanData } from "@/utils/api";

interface Props {
  plan: Plan;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  res,
  query,
}) => {
  const SSR = withSSRContext({ req });
  const planId = query.id as string;
  try {
    const plan = await getPlanData(SSR, planId);
    return { props: { plan } };
  } catch (error) {
    return { redirect: { permanent: false, destination: "/" } };
  }
};

const PlanPage = ({ plan }: Props) => {
  return <Navbar title={plan.name} showGoBack />;
};

export default PlanPage;
