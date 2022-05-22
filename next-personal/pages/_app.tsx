import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Quicksand",
        colorScheme: "dark",
        headings: { fontFamily: "Quicksand" },
        primaryColor: "pink",
        primaryShade: 0,
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
