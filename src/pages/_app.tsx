import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { useJsApiLoader } from "@react-google-maps/api";
import awsconfig from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";
import "../styles/globals.css";

Amplify.configure({ ...awsconfig, ssr: true });

const inter = Inter({ subsets: ["latin"] });

const libraries: (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[] = ["places"];

export default function App({ Component, pageProps }: AppProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries,
  });

  return isLoaded ? (
    <Authenticator.Provider>
      <main className={inter.className}>
        <Component {...pageProps} isLoaded={isLoaded} />
      </main>
    </Authenticator.Provider>
  ) : null;
}
