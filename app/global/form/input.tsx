
interface InputProps {
    id ?: string
    name ?: string
    type ?: string
    specialStyles ?: string
    placeholder ?: string
    label ?: string
    autoComplete ?: string
}

const Input : React.FC<InputProps> = ({label, specialStyles, ...props}) => {

    return (
        <div>
            <label htmlFor={props.id} className="sr-only">
                {label}
            </label>
            <input
                {...props}
                className={`${specialStyles ? specialStyles : ""} relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 transition focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
            />
        </div>
    )
}


export default Input;