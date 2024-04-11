import H1 from "../components/headings/h1.jsx";
import Index from "../components/posts/index.jsx";
import Create from "../components/buttons/create.jsx";

export default function Posts() {

    return (
        <>
            <div className="flex justify-between">
                <H1 text="Posts List"/>
                <Create/>
            </div>
            <Index/>
        </>
    )
}