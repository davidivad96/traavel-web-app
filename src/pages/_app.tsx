import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Oval } from "react-loader-spinner";
import awsconfig from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";
import "../styles/globals.css";

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
