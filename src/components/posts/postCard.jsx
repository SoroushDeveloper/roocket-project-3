import moment from "moment";
import Edit from "../buttons/edit.jsx";
import Delete from "../buttons/delete.jsx";
import H2 from "../headings/h2.jsx";

export default function PostCard({post}) {
    const creationDate = moment(post?.createdAt).format('MM/DD/YYYY | h:mm');

    return (
        <div className="rounded-xl bg-gray-200 dark:bg-gray-800 p-5">
            <div className="flex justify-between pb-5 border-b border-black">
                <span className="text-gray-900 dark:text-gray-100">
                    #{post?.id}
                </span>
                <span className="text-gray-900 dark:text-gray-100">
                    {creationDate}
                </span>
            </div>
            <div className="text-left py-5 border-b border-black">
                <H2 text={post?.title}/>
            </div>
            <div className="flex justify-end space-x-2 pt-5">
                <Edit/>
                <Delete/>
            </div>
        </div>
    )
}