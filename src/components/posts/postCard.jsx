import moment from "moment";
import Edit from "../buttons/edit.jsx";
import Delete from "../buttons/delete.jsx";
import H2 from "../headings/h2.jsx";
import {useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Success from "../toasts/success.js";
import Error from "../toasts/error.js";
import EditPost from "../modals/editPost.jsx";

export default function PostCard({post, deletePostHandler, updatePostHandler}) {
    const url = 'https://66170aeaed6b8fa43481e54d.mockapi.io/posts/' + post?.id;
    const creationDate = moment(post?.createdAt).format('MM/DD/YYYY | h:mm');

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
                        deletePostHandler(response.data.id);
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
                <Edit onClickHandler={showModalHandler}/>
                <Delete onClickHandler={deletePost}/>
            </div>
            <EditPost showModal={showModal} hideModalHandler={hideModalHandler} post={post}
                      updatePostHandler={updatePostHandler}/>
        </div>
    )
}