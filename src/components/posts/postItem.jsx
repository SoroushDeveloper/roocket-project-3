import moment from 'moment';

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
                    <button
                        className="border-yellow-500 border hover:bg-yellow-500 hover:text-white dark:hover:text-black text-yellow-500 font-bold py-2 px-4 rounded dark:text-yellow-500">
                        Edit
                    </button>
                    <button
                        className="border-red-500 border hover:bg-red-500 hover:text-white dark:hover:text-black text-red-500 font-bold py-2 px-4 rounded dark:text-red-500">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}