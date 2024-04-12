import Pencil from "../icons/pencil.jsx";

export default function Edit() {

    return (
        <button
            className="flex items-center hover:cursor-pointer border-yellow-500 border hover:bg-yellow-500 hover:text-white dark:hover:text-black text-yellow-500 font-bold py-2 px-4 rounded dark:text-yellow-500">
            <span>
                <Pencil/>
            </span>
            <span className="ml-2 button-text">
                Edit
            </span>
        </button>
    )
}