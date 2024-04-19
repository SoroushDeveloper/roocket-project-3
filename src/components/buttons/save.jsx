import CheckCircle from "../icons/checkCircle.jsx";

export default function Save({onClickHandler}) {
    return (
        <button onClick={onClickHandler}
                className="flex items-center hover:cursor-pointer border-green-500 border hover:bg-green-500 hover:text-white dark:hover:text-black text-green-500 font-bold py-2 px-4 rounded dark:text-green-500">
            <span>
                <CheckCircle/>
            </span>
            <span className="ml-2 button-text">
                Save
            </span>
        </button>
    )
}