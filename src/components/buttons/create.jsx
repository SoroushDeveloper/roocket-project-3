import Default from "./default.jsx";
import Plus from "../icons/plus.jsx";

export default function Create() {

    const props = {
        color: 'blue',
        title: 'Create',
        icon: <Plus/>,
    }

    return (
        <Default props={props}/>
    )
}