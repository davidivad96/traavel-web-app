import { API } from "aws-amplify";
import { Flex, Button } from "@aws-amplify/ui-react";
import { createPlan } from "@/graphql/mutations";
import { User } from "@/models";
import { Modal } from "./Modal";

const Content = () => <p>Content</p>;

interface FooterProps {
  onClick: () => void;
}

const Footer = ({ onClick }: FooterProps) => (
  <Flex justifyContent="flex-end">
    <Button variation="primary" onClick={onClick}>
      Create my plan
    </Button>
  </Flex>
);

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  user: User;
}

export const NewPlanModal = ({ isOpen, setIsOpen, user }: Props) => {
  const handleCreatePlan = async () => {
    await API.graphql({
      query: createPlan,
      variables: {
        input: {
          name: "My plan",
          ownerId: user.id,
        },
      },
    });
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Create your plan!"
      onClose={() => setIsOpen(false)}
      Content={Content}
      Footer={() => <Footer onClick={handleCreatePlan} />}
    />
  );
};
