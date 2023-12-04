import Layout from "@/components/Layout/Layout";
import { Provider } from 'react-redux'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Provider store={store} >
       <Layout >
          <Component {...pageProps} />
        </Layout>
       </Provider>
       
     
    </>
  );
}
