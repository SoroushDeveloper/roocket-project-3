import H1 from "../components/headings/h1.jsx";
import ShowLink from "../components/partial/showLink.jsx";

export default function Home() {

    return (
        <>
            <H1 text={'Welcome'}/>
            <hr className="m-5"/>
            <div className="flex justify-center">
                <ShowLink props={{title: 'Show Posts', link: '/posts'}}/>
            </div>
        </>
    )
}