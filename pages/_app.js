import Layout from "@/components/layout/Layout";
import { persistor, store } from "@/redux/store/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        {/* </PersistGate> */}
    </Provider>
  );
}
