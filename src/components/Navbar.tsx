import { useRouter } from "next/router";
import Image from "next/image";
import { Button, Flex, Heading, useAuthenticator } from "@aws-amplify/ui-react";

interface Props {
  name?: string | null;
  avatarUrl?: string | null;
}

export const Navbar = ({ name, avatarUrl }: Props) => {
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  const router = useRouter();

  const handleSignOut = async () => {
    signOut();
    router.push("/");
  };

  return (
    <Flex direction="row" justifyContent="space-between" alignItems="center">
      <Flex direction="row">
        <Heading level={1}>Hello {name}</Heading>
        <Image
          src={avatarUrl || "/images/default_avatar_image.png"}
          alt="Profile image"
          width={60}
          height={60}
        />
      </Flex>
      <Button onClick={handleSignOut}>Sign out</Button>
    </Flex>
  );
};
