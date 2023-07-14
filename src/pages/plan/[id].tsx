import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { Flex } from "@aws-amplify/ui-react";
import { Plan as PlanModel } from "@/models";
import { Navbar } from "@/components/Navbar";
import { getPlanData } from "@/utils/api";

interface Props {
  plan: PlanModel;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
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

const Plan = ({ plan: { name } }: Props) => {
  return (
    <Flex direction="row" alignItems="flex-start">
      <Navbar title={name || ""} showGoBack />
    </Flex>
  );
};

export default Plan;
