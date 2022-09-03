/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

interface AuthProps {
  isLogin : boolean
}

const Header : React.FC<AuthProps> = ({isLogin}) => {

  return (
      <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center md:text-3xl text-2xl font-bold tracking-tight text-gray-900">
            {
              isLogin
                ? "به اکانت خود وارد شوید !"
                : "به آسانی ثبت نام کنید !"
            }
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            یا{' '}
            <Link href={isLogin ? "./register" : "./login"}>
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                {
                  isLogin
                    ? "همین الان با در سایت ثبت نام کنید"
                    : "اگر قبلاً ثبت نام کرده اید همین الان وارد شوید"
                }
              </a>
            </Link>
          </p>
      </div>
  )
}


export default Header;