
interface ButtonProps {
    Icon ?: any
    text : string | number
    customClasses ?: string
    disabled ?: boolean
    customColor ?: string
    small ?: boolean
}

const Button : React.FC<ButtonProps> = ({Icon, text, customClasses, small,customColor , disabled}) => {
    return (
        <div>
            <button
                type="submit"
                className={`${customColor ?? "bg-indigo-600 text-white hover:bg-indigo-700"} ${customClasses ?? ""} ${small ? "text-xs" : "text-sm"} group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                disabled={disabled ? true : false}
            >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {
                        Icon && <Icon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    }
                </span>
                {text}
            </button>  
        </div>
    )
}

export default Button