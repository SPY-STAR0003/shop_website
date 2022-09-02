// assets
import { LockClosedIcon } from '@heroicons/react/20/solid'

// components
import Checkbox from '../global/form/checkbox'
import Input from '../global/form/input'
import MyLink from "./../global/link/link"
import Button from '../global/form/button'

const Form : React.FC = () => {

    return (
        <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-4 rounded-md shadow-sm">
                <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    label={"نام :"}
                />
                <Input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="current-email"
                    placeholder="ایمیل خود را وارد نمایید"
                    label={"ایمیل :"}
                />
                <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="رمز عبور خود را وارد نمایید"
                    label={"رمز عبور :"}
                />
            </div>
            <div className="flex sm:flex-row sm:space-y-0 space-y-3 flex-col items-center justify-between">
                <Checkbox
                    id={"checkbox"}
                    type={"checkbox"}
                    label={"مرا به خاطر بسپار"}
                />
                <MyLink text={"رمز عبور خود را فراموش کرده ام"} />
            </div>
            <Button text={"ورود"} Icon={LockClosedIcon} />
        </form>
    )
}


export default Form;