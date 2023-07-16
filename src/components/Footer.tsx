import { Flex, Heading } from "@aws-amplify/ui-react";

export const Footer = () => (
  <Flex
    position="absolute"
    width="100%"
    height={70}
    justifyContent="center"
    alignItems="center"
    backgroundColor="#F4F4FB"
    padding={15}
    style={{ bottom: 0 }}
  >
    <Heading level={1}>Footer</Heading>
  </Flex>
);
