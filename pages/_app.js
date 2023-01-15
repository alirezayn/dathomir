import Layout from "@/components/layout/Layout";
import { persistor, Store } from "@/redux/store/Store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  return (
    <PersistGate loading="null" persistor={persistor}>
      <Provider store={Store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </PersistGate>
    
  );
}
