// next & react
import Router from "next/router";
import { useEffect } from "react"

// components
import Form from "./form";
import Header from "./header";

// libraries
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { useCookies } from "react-cookie";
import { setToken } from "../../../../store/slices/auth";

const Verify : React.FC = () => {

    const dispatch = useAppDispatch()
    const [cookie, setCookie] = useCookies(["auth_token"])
    const userToken = useAppSelector(state => state.auth.token)

    const clearTokenFromRedux = () => {
        dispatch(setToken(undefined))
    }

    useEffect(() => {
        Router.beforePopState(() => {
            clearTokenFromRedux()
            return true
        })

        if(!userToken) Router.push("/404")
    }, [userToken])

    return (
        <div className={"absolute top-0 left-0 w-full h-full bg-gray-50"}>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full bg-white p-6 max-w-md space-y-8 rounded">
                    <Header />
                    <Form clearTokenFromRedux={clearTokenFromRedux} token={userToken} setCookie={setCookie}/>        
                </div>
            </div>
        </div>
    )
}

export default Verify;