import Times from "../icons/times.jsx";

export default function Close({onClickHandler}) {
    return (
        <button onClick={onClickHandler}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <Times/>
        </button>
    )
}