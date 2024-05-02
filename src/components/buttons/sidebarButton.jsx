import Menu from "../icons/menu.jsx";

export default function SidebarButton({onClickHandler}) {
    return (
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar" type="button" onClick={onClickHandler}
                className="fixed left-0 top-0 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">
                Open sidebar
            </span>
            <Menu/>
        </button>
    )
}