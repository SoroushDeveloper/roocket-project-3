import Default from "./default.jsx";
import Trash from "../icons/trash.jsx";

export default function Delete({text}) {

    const props = {
        color: 'red',
        title: 'Delete',
        icon: <Trash/>,
        text,
    }

    return (
        <Default props={props}/>
    )
}