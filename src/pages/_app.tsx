import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
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

const libraries: (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[] = ["places"];

const inter = Inter({ subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, props: AppProps) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
    libraries,
  });

  return isLoaded ? (
    <Authenticator.Provider>
      <main className={inter.className}>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </main>
    </Authenticator.Provider>
  ) : (
    <Oval
      height={60}
      width={60}
      color="#367b92"
      secondaryColor="#367b92"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        margin: "30px",
      }}
      visible
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
