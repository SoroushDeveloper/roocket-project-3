export default function ShowLink({props}) {

    return (
        <a href={props?.link}
           className="flex items-center hover:cursor-pointer border-purple-500 border hover:bg-purple-500 hover:text-white dark:hover:text-black text-purple-500 font-bold py-2 px-4 rounded dark:text-purple-500">
            {props?.title}
        </a>
    )
}