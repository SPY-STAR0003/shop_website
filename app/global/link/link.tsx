
interface LinkProps {
    text: string
}

const MyLink : React.FC<LinkProps> = ({text}) => {
    return (
        <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                {text}
            </a>
        </div>
    )
}

export default MyLink;