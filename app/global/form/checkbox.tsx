
interface InputProps {
    id ?: string
    name ?: string
    type ?: string
    specialStyles ?: string
    placeholder ?: string
    label ?: string
    autoComplete ?: string
}

const Checkbox : React.FC<InputProps> = ({label, specialStyles, ...props}) => {

    return (
        <div className="flex items-center">
            <input
                {...props}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor={props.id} className="mr-2 block text-sm text-gray-900">
                {label}
            </label>
        </div>
    )
}


export default Checkbox;