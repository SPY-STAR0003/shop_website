/* eslint-disable @next/next/no-img-element */


const Header : React.FC = () => {


    return (
        <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center md:text-3xl text-2xl font-bold tracking-tight text-gray-900">
              به اکانت خود وارد شوید !
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              یا{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                همین الان با در سایت ثبت نام کنید
              </a>
            </p>
        </div>
    )
}


export default Header;