import Default from "./default.jsx";
import Pencil from "../icons/pencil.jsx";

export default function Edit({text}) {

    const props = {
        color: 'yellow',
        title: 'Edit',
        icon: <Pencil/>,
        text,
    }

    return (
        <Default props={props}/>
    )
}