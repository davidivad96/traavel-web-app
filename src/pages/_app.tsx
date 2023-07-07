import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsconfig from "../aws-exports";

Amplify.configure({ ...awsconfig, ssr: true });

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator.Provider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Authenticator.Provider>
  );
}
