import { Flex, Button } from "@aws-amplify/ui-react";
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
}

export const NewPlanModal = ({ isOpen, setIsOpen }: Props) => {
  const handleCreatePlan = () => {
    // TODO: create plan
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
