import { View, Button, Flex, Heading, ScrollView } from "@aws-amplify/ui-react";
import { IoClose } from "react-icons/io5";

interface Props {
  title: string;
  onClose: () => void;
  isOpen?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Modal = ({
  title,
  onClose,
  isOpen = false,
  style,
  children,
}: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ScrollView
      position="fixed"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      width="100%"
      height="100%"
      onClick={onClose}
      style={{
        top: 0,
        left: 0,
        backdropFilter: "blur(3px)",
        zIndex: 1000,
        ...style,
      }}
    >
      <View
        backgroundColor="white"
        padding="1.2rem"
        borderRadius="0.5rem"
        minWidth="300px"
        maxWidth="500px"
        margin="2rem auto"
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={4}>{title}</Heading>
          <Button variation="link" size="small" onClick={onClose}>
            <IoClose size={22} />
          </Button>
        </Flex>
        {children}
      </View>
    </ScrollView>
  );
};
