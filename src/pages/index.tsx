import { useEffect } from "react";
import { useRouter } from "next/router";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

const Auth = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const router = useRouter();

  useEffect(() => {
    if (route === "authenticated") {
      router.push("/home");
    }
  }, [route, router]);

  return <Authenticator variation="modal" />;
};

export default Auth;
