import { View } from "@aws-amplify/ui-react";
import { Modal } from "./Modal";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const CreateActivityModal = ({ isOpen, setIsOpen }: Props) => {
  const handleOnCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Add an activity"
      onClose={handleOnCloseModal}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View padding="30px 0">
        <p>Coming soon...</p>
      </View>
    </Modal>
  );
};
