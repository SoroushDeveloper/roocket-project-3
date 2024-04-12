import Trash from "../icons/trash.jsx";

export default function Delete() {

    return (
        <button
            className="flex items-center hover:cursor-pointer border-red-500 border hover:bg-red-500 hover:text-white dark:hover:text-black text-red-500 font-bold py-2 px-4 rounded dark:text-red-500">
            <span>
                <Trash/>
            </span>
            <span className="ml-2 button-text">
                Delete
            </span>
        </button>
    )
}