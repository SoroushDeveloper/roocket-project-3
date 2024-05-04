import Spinner from "../animations/spinner.jsx";

export default function Loading() {
    return (
        <button type="submit"
                className="flex items-center hover:cursor-pointer border-gray-500 border hover:bg-gray-500 hover:text-white dark:hover:text-black text-gray-500 font-bold py-2 px-4 rounded dark:text-gray-500">
            <span>
                <Spinner/>
            </span>
            <span className="ml-2 button-text">
                Loading
            </span>
        </button>
    )
}