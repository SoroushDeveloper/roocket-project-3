import moment from 'moment';
import axios from "axios";

import Edit from "../buttons/edit.jsx";
import Delete from "../buttons/delete.jsx";
import Error from "../toasts/error.js";
import Success from "../toasts/success.js";
import Swal from "sweetalert2";
import EditPost from "../modals/editPost.jsx";
import {useState} from "react";

export default function PostItem({post, deletePostHandler, updatePostHandler}) {
    const url = 'https://66170aeaed6b8fa43481e54d.mockapi.io/posts/' + post?.id;
    const creationDate = moment(post?.createdAt).format('MMMM Do YYYY, h:mm:ss A');

    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    }
    const hideModalHandler = () => {
        setShowModal(false);
    }
    const deletePost = async () => {
        await Swal.fire({
            title: 'Delete record?',
            text: 'This action cannot be undone.',
            icon: 'question',
            confirmButtonText: 'Delete',
            confirmButtonColor: '#DC004E',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            reverseButtons: true,
            focusConfirm: false,
            focusCancel: false,
            scrollbarPadding: false
        }).then(result => {
            if (result.isConfirmed) {
                axios.delete(url)
                    .then(function (response) {
                        deletePostHandler(post?.id);
                        Success('Post deleted successfully');
                    })
                    .catch(function (error) {
                        Error(error);
                    });
            } else {
                Swal.fire({
                    title: 'Canceled',
                    text: 'Deleting operation cancelled',
                    icon: 'info',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#003edc',
                    scrollbarPadding: false
                })
            }
        });
    }

    return (
        <>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                <span className="text-center">
                    {post?.title}
                </span>
                </th>
                <td className="px-6 py-4 text-center">
                <span className="text-center">
                    {creationDate}
                </span>
                </td>
                <td className="px-6 py-4 text-center">
                    <div className="flex justify-evenly">
                        <Edit onClickHandler={showModalHandler}/>
                        <Delete onClickHandler={deletePost}/>
                    </div>
                </td>
            </tr>
            <EditPost showModal={showModal} hideModalHandler={hideModalHandler} post={post}
                      updatePostHandler={updatePostHandler}/>
        </>
    )
}