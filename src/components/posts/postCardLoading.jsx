import Hr from "../partial/hr.jsx";
import H3 from "../headings/h3.jsx";
import Edit from "../buttons/edit.jsx";
import Delete from "../buttons/delete.jsx";
import Text from "../placeholders/text.jsx";

export default function PostCardLoading() {
    return (
        <div className="rounded-xl bg-gray-200 dark:bg-gray-800 p-5">
            <div className="flex justify-between">
                <span className="text-gray-900 dark:text-gray-100">
                    #{<Text/>}
                </span>
                <span className="text-gray-900 dark:text-gray-100">
                    {<Text/>}
                </span>
            </div>
            <Hr/>
            <div className="text-left">
                <Text/>
            </div>
            <Hr/>
            <div className="flex justify-end space-x-2">
                <Edit/>
                <Delete/>
            </div>
        </div>
    )
}