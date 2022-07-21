import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/styles.scss';

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from '../app/store'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
