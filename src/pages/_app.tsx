import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Amplify } from "aws-amplify";
import { Authenticator, Flex, Loader } from "@aws-amplify/ui-react";
import { useJsApiLoader } from "@react-google-maps/api";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main className={inter.className}>
          {getLayout(<Component {...pageProps} />, pageProps)}
        </main>
      </LocalizationProvider>
    </Authenticator.Provider>
  ) : (
    <Flex justifyContent="center" margin="30px 0">
      <Loader width={75} height={75} />
    </Flex>
  );
}
