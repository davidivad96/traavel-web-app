import { useRouter } from "next/router";
import Image from "next/image";
import {
  Button,
  Divider,
  Flex,
  Heading,
  View,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { BiArrowBack } from "react-icons/bi";

interface Props {
  title?: string;
  showLogo?: boolean;
  showGoBack?: boolean;
  showSignOut?: boolean;
}

export const Navbar = ({
  title,
  showLogo = false,
  showGoBack = false,
  showSignOut = false,
}: Props) => {
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  const router = useRouter();

  const handleSignOut = async () => {
    signOut();
    router.push("/");
  };

  return (
    <View height={100}>
      <Flex
        direction="row"
        justifyContent={
          showLogo ? "space-between" : showGoBack ? "flex-start" : "center"
        }
        alignItems="center"
        backgroundColor="#FFF"
        padding="9px 15px"
        gap={30}
        height="98%"
      >
        <Flex direction="row">
          {showGoBack && (
            <Button variation="link" size="large" onClick={() => router.back()}>
              <BiArrowBack />
            </Button>
          )}
          {showLogo && (
            <Image
              src={"/images/traavel_logo.png"}
              alt="Logo image"
              width={275}
              height={80}
            />
          )}
          {title && <Heading level={2}>{title}</Heading>}
        </Flex>
        {showSignOut && <Button onClick={handleSignOut}>Sign out</Button>}
      </Flex>
      <Divider />
    </View>
  );
};
