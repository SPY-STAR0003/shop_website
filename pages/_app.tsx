// types
import type { AppProps } from 'next/app';

// assets
import '../styles/globals.css';
import 'sweetalert2/src/sweetalert2.scss'

// libraries
import {setLocale} from "yup";
import { store } from "../app/store";
import { Provider } from 'react-redux';

setLocale({
  mixed : {
      required : "این فیلد نمی تواند خالی باشد"
  },
  string : {
      min: ' حداقل کاراکتر این فیلد باید ${min} باشد ',
      max : ' حداکثر کاراکتر این فیلد باید ${max} باشد ',
      email : ' عبارت وارد شده باید نشانی ایمیل باشد '
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
