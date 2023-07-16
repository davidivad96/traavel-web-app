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
  title: string;
  showAvatar?: boolean;
  showGoBack?: boolean;
  showSignOut?: boolean;
  avatarUrl?: string | null;
}

export const Navbar = ({
  title,
  showAvatar = false,
  showGoBack = false,
  showSignOut = false,
  avatarUrl,
}: Props) => {
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  const router = useRouter();

  const handleSignOut = async () => {
    signOut();
    router.push("/");
  };

  return (
    <View height={90}>
      <Flex
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        backgroundColor="#FFF"
        padding={15}
        gap={30}
      >
        <Flex direction="row">
          {showGoBack && (
            <Button variation="link" size="large" onClick={() => router.back()}>
              <BiArrowBack />
            </Button>
          )}
          <Heading level={2}>{title}</Heading>
          {showAvatar && (
            <Image
              src={avatarUrl || "/images/default_avatar_image.png"}
              alt="Profile image"
              width={60}
              height={60}
            />
          )}
        </Flex>
        {showSignOut && <Button onClick={handleSignOut}>Sign out</Button>}
      </Flex>
      <Divider />
    </View>
  );
};
