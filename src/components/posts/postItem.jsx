import moment from 'moment';
import Edit from "../buttons/edit.jsx";
import Delete from "../buttons/delete.jsx";

export default function PostItem({post}) {
    const creationDate = moment(post?.createdAt).format('MMMM Do YYYY, h:mm:ss A');
    return (
        <tr>
            <td className="p-5">
                <span>
                    {post?.id}
                </span>
            </td>
            <td className="p-5">
                <span className="text-center">
                    {post?.title}
                </span>
            </td>
            <td className="p-5">
                <span className="text-center">
                         {creationDate}
                </span>
            </td>
            <td className="p-5">
                <div className="flex justify-around">
                    <Edit/>
                    <Delete/>
                </div>
            </td>
        </tr>
    )
}