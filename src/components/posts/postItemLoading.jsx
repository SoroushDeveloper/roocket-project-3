import Text from "../placeholders/text.jsx";
import Button from "../placeholders/button.jsx";

export default function PostItemLoading() {
    return (
        <tr>
            <td className="p-5">
                <span>
                    <Text/>
                </span>
            </td>
            <td className="p-5">
                <span className="text-center">
                    <Text/>
                </span>
            </td>
            <td className="p-5">
                <span className="text-center">
                    <Text/>
                </span>
            </td>
            <td className="p-5">
                <div className="flex justify-around">
                    <Button color={'yellow'}/>
                    <Button color={'red'}/>
                </div>
            </td>
        </tr>
    )
}