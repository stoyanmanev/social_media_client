import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import "../style/styles.scss";

import React from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import store from "../app/store";
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());


  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </QueryClientProvider>
    </Provider>
  );
}
