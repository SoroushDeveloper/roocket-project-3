import Logout from "../icons/logout.jsx";

export default function LogoutButton({onClickHandler}) {
    return (
        <button type="button" onClick={onClickHandler}
                className="fixed right-0 top-0 inline-flex items-center p-2 mt-2 mr-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">
                Log Out
            </span>
            <Logout/>
        </button>
    )
}