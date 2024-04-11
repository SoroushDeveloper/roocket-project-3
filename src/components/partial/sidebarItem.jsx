export default function SidebarItem({item}) {
    return (
        <li>
            <a href={item?.link} id={item?.id}
               className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${item?.active ? 'text-blue-500 font-bold' : 'text-gray-900 dark:text-gray-100'}`}>
                {
                    item?.icon
                }
                <span className="ms-3">
                    {item?.name}
                </span>
            </a>
        </li>
    )
}