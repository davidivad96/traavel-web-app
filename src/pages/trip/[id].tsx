import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { Flex } from "@aws-amplify/ui-react";
import { Trip as TripModel } from "@/models";
import { Navbar } from "@/components/Navbar";
import { getTripData } from "@/utils/api";

interface Props {
  trip: TripModel;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  query,
}) => {
  const SSR = withSSRContext({ req });
  const tripId = query.id as string;
  try {
    const trip = await getTripData(SSR, tripId);
    return { props: { trip } };
  } catch (error) {
    return { redirect: { permanent: false, destination: "/" } };
  }
};

const Trip = ({ trip: { name } }: Props) => {
  return (
    <Flex direction="row" alignItems="flex-start">
      <Navbar title={name || ""} showGoBack />
    </Flex>
  );
};

export default Trip;
