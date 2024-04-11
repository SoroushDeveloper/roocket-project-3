import H1 from "../components/headings/h1.jsx";
import Index from "../components/posts/index.jsx";

export default function Posts() {

    return (
        <>
            <div className="flex justify-between">
                <H1 text="Posts List"/>
                <button
                    className="border-blue-500 border hover:bg-blue-500 hover:text-white dark:hover:text-black text-blue-500 font-bold py-2 px-4 rounded dark:text-blue-500">
                    Create
                </button>
            </div>
            <Index/>
        </>
    )
}