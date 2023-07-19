import Layout from "@/components/layout/Layout";
import { persistor, store } from "@/redux/store/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { ThemeProvider } from "react-bootstrap";
export default function App({ Component, pageProps }) {
  
  return (
    
    <Provider store={store}>
      <ThemeProvider dir="rtl">
        {/* <PersistGate persistor={persistor}> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        {/* </PersistGate> */}
    </ThemeProvider>
    </Provider>
  );
}
