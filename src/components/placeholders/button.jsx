export default function Button({color}) {
    return (
        <a
            href="#"
            tabIndex="-1"
            className={`inline-block min-h-[1em] w-6/12 flex-auto cursor-wait rounded bg-${color} px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white opacity-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out before:inline-block before:content-[''] hover:bg-${color}-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-${color}-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-${color}-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}>
        </a>
    )
}