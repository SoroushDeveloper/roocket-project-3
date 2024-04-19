import {useState} from "react";

import axios from "axios";

import Save from "../buttons/save.jsx";
import Cancel from "../buttons/cancel.jsx";
import Success from "../toasts/success.js";
import Warning from "../toasts/warning.js";
import Error from "../toasts/error.js";

export default function NewPost({showModal, hideModalHandler, onDataReceived, posts}) {
    const url = 'https://66170aeaed6b8fa43481e54d.mockapi.io/posts';

    const [title, setTitle] = useState('');

    const handleSetNewPost = (data) => {
        let count = posts.length;
        posts[count] = data;
        onDataReceived(posts);
    };
    const inputHandler = (event) => {
        if (event.key === 'Enter') {
            saveHandler();
        } else {
            setTitle(event.target.value);
        }
    }
    const saveHandler = async () => {
        if (title !== "") {
            let data = {
                title: title,
            }
            axios.post(url, data)
                .then(function (response) {
                    handleSetNewPost(response.data);
                    Success('Post Saved!');
                    hideModalHandler();
                })
                .catch(function (error) {
                    Error(error)
                });
        } else {
            Warning('Title is required');
        }
    }

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 dark:bg-gray-900 outline-none focus:outline-none">
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-gray-400 dark:border-gray-600 rounded-t">
                                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                                        New Post
                                    </h3>
                                </div>
                                <div className="relative p-6 flex-auto w-96">
                                    <input type="text" id="title" onKeyUp={inputHandler}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Post Title" required/>
                                </div>
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-gray-400 dark:border-gray-600 rounded-b">
                                    <div className="flex space-x-2">
                                        <Cancel onClickHandler={hideModalHandler}/>
                                        <Save onClickHandler={saveHandler}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}