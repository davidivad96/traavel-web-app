import Image from "next/image";
import { Flex, Text } from "@aws-amplify/ui-react";

export const Footer = () => (
  <Flex
    position="absolute"
    width="100%"
    height={150}
    justifyContent="center"
    alignItems="center"
    backgroundColor="#F4F4FB"
    padding={15}
    style={{ bottom: 0 }}
  >
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Image
        src={"/images/traavel_logo_footer.png"}
        alt="Logo footer image"
        width={275}
        height={80}
      />
      <Text color="#8b8b8b">
        Traavel is the best way to plan your next trip. Give it a chance!
      </Text>
    </Flex>
  </Flex>
);
