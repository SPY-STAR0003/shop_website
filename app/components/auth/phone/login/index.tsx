import Form from "./form"
import Header from "../../similar/header"
import { useCookies } from "react-cookie"


const Login : React.FC = () => {

    const [cookie, setCookie] = useCookies(['shopWebsite'])

    return (
        <div className={"absolute top-0 left-0 w-full h-full bg-gray-50"}>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full bg-white p-6 max-w-md space-y-8 rounded">
                    <Header isLogin={true} />
                    <Form setCookie={setCookie} />        
                </div>
            </div>
        </div>
    )
}

export default Login;