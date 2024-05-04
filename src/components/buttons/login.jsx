import CheckCircle from "../icons/checkCircle.jsx";

export default function LoginButton() {
    return (
        <button type="submit"
                className="flex items-center hover:cursor-pointer border-cyan-500 border hover:bg-cyan-500 hover:text-white dark:hover:text-black text-cyan-500 font-bold py-2 px-4 rounded dark:text-cyan-500">
            <span>
                <CheckCircle/>
            </span>
            <span className="ml-2 button-text">
                Login
            </span>
        </button>
    )
}