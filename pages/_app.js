import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Provider } from "next-auth/client";

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Provider
        // Provider options are not required but can be useful in situations where
        // you have a short session maxAge time. Shown here with default values.
        options={{
          // Client Max Age controls how often the useSession in the client should
          // contact the server to sync the session state. Value in seconds.
          // e.g.
          // * 0  - Disabled (always use cache value)
          // * 60 - Sync session state with server if it's older than 60 seconds
          clientMaxAge: 0,
          // Keep Alive tells windows / tabs that are signed in to keep sending
          // a keep alive request (which extends the current session expiry) to
          // prevent sessions in open windows from expiring. Value in seconds.
          //
          // Note: If a session has expired when keep alive is triggered, all open
          // windows / tabs will be updated to reflect the user is signed out.
          keepAlive: 0,
        }}
        session={pageProps.session}
      >
        <Head>
          <script
            src="https://unpkg.com/@material-ui/core/umd/material-ui.production.min.js"
            crossOrigin="anonymous"
          ></script>

          <script
            src="https://unpkg.com/@material-ui/core@4.11.3/umd/material-ui.development.js"
            crossOrigin="true"
          ></script>

          <script
            src="https://unpkg.com/@material-ui/core@4.11.3/umd/material-ui.production.min.js"
            crossOrigin="true"
          ></script>

          <script
            src="https://unpkg.com/react/umd/react.production.min.js"
            crossOrigin="true"
          ></script>

          <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossOrigin="true"
          ></script>

          <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossOrigin="true"
          ></script>

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
