import { Global } from "@emotion/react";

import injectGlobalStyles from "common/styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={injectGlobalStyles()} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
