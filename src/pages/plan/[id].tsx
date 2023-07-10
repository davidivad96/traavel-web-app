import { useRouter } from "next/router";

const Plan = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Plan {id}</h1>
    </div>
  );
};

export default Plan;
