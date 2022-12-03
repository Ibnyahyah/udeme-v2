// import '../styles/globals.css'
import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/layout";

import { extendTheme } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const user = JSON.parse(localStorage?.getItem("user") as any);
    // user?.token ? router.push("/") : router.push("/auth/login");
  }, []);
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
