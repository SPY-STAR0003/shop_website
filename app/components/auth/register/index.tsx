import Form from "../similar/form"
import Header from "../similar/header"

const Register : React.FC = () => {

    return (
        <div className={"absolute top-0 left-0 w-full h-full bg-gray-50"}>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full bg-white p-6 max-w-md space-y-8 rounded">
                    <Header isLogin={false} />
                    <Form isLogin={false} />        
                </div>
            </div>
        </div>
    )
}

export default Register;