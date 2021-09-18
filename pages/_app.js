import { useEffect } from "react";

import "tailwindcss/tailwind.css";
import "../public/style/global.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "../store/store";
import withReduxStore from "../store/with-redux-store";

function App({ Component, pageProps, reduxStore }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      once: false,
      duration: 500,
      mirror: true,
    });
  }, []);

  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default withReduxStore(App);
