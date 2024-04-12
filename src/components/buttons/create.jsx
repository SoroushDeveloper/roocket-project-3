import Plus from "../icons/plus.jsx";

export default function Create() {

    return (
        <button
            className="flex items-center hover:cursor-pointer border-blue-500 border hover:bg-blue-500 hover:text-white dark:hover:text-black text-blue-500 font-bold py-2 px-4 rounded dark:text-blue-500">
            <span>
                <Plus/>
            </span>
            <span className="ml-2 button-text">
                Create
            </span>
        </button>
    )
}