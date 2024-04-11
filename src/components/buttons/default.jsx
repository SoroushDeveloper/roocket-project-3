import '../../assets/styles/buttons/default.css'

export default function Default({props}) {
    return (
        <button
            className={`flex items-center border-${props?.color}-500 border hover:bg-${props?.color}-500 hover:text-white dark:hover:text-black text-${props?.color}-500 font-bold py-2 px-4 rounded dark:text-${props?.color}-500`}>
            <span>
                {props?.icon}
            </span>
            <span className="ml-2 button-text">
                {props?.title}
            </span>
        </button>
    )
}