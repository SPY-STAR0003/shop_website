/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const Header : React.FC = () => {

  return (
      <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center md:text-3xl text-2xl font-bold tracking-tight text-gray-900">
            تایید شماره موبایل
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500 leading-8">
            سرور برای شماره موبایلی که در مرحله قبل وارد کردید کدی را ارسال کرد.
            <br /> لطفا تا دریافت کد این صفحه را نبندید و صبور باشید ...
          </p>
      </div>
  )
}


export default Header;