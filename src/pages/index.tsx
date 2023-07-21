import { useEffect } from "react";
import Head from "next/head";
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

  return (
    <>
      <Head>
        <title>Traavel App - Login</title>
        <meta name="description" content="Login to your account" />
      </Head>
      <Authenticator variation="modal" />
    </>
  );
};

export default Auth;
