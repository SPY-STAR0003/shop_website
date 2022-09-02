
interface ButtonProps {
    Icon ?: any
    text : string
}

const Button : React.FC<ButtonProps> = ({Icon, text}) => {
    return (
        <div>
            <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Icon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                {text}
            </button>  
        </div>
    )
}

export default Button