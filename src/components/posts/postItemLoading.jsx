import Text from "../placeholders/text.jsx";

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
            <td className="p-5"></td>
        </tr>
    )
}