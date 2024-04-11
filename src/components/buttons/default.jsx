import '../../assets/styles/buttons/default.css'

export default function Default({props}) {
    return (
        <button
            className={`border-${props?.color}-500 border hover:bg-${props?.color}-500 hover:text-white dark:hover:text-black text-${props?.color}-500 font-bold py-2 px-4 rounded dark:text-${props?.color}-500`}>
            {props?.title}
        </button>
    )
}