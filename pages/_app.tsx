// types
import type { AppProps } from 'next/app';

// assets
import '../styles/globals.css';

// libraries
import {setLocale} from "yup";

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
  return <Component {...pageProps} />
}

export default MyApp
