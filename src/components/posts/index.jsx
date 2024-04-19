import PostItem from "./postItem.jsx";
import '../../assets/styles/posts.css';
import PostItemLoading from "./postItemLoading.jsx";
import PostCard from "./postCard.jsx";
import PostCardLoading from "./postCardLoading.jsx";
import axios from "axios";
import Success from "../toasts/success.js";
import Error from "../toasts/error.js";

export default function Index({posts, isLoading, onDataReceived}) {

    const deletePostHandler = (id) => {
        let newPosts = posts.filter((post) => {
            return post.id !== id;
        });
        onDataReceived(newPosts);
    }
    const updatePostHandler = (post, data) => {
        let newPosts = posts.map((post) => {
            if (post.id === data.id) {
                post.title = data.title;
                return post;
            }
            return post;
        });
        onDataReceived(newPosts)
    }

    return (
        <>
            <div className="posts-table relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                    <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Creation Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        !isLoading
                            ?
                            posts && posts.map((post) => {
                                return (
                                    <PostItem key={post?.id} post={post}
                                              deletePostHandler={deletePostHandler}
                                              updatePostHandler={updatePostHandler}/>
                                );
                            })
                            :
                            <>
                                <PostItemLoading/>
                                <PostItemLoading/>
                                <PostItemLoading/>
                                <PostItemLoading/>
                                <PostItemLoading/>
                            </>
                    }
                    </tbody>
                </table>
            </div>
            <div className="posts-grid grid grid-cols-1 space-y-2 mt-5">
                {
                    !isLoading
                        ?
                        posts && posts.map((post) => {
                            return (<PostCard key={post?.id} post={post}/>);
                        })
                        :
                        <>
                            <PostCardLoading/>
                            <PostCardLoading/>
                            <PostCardLoading/>
                            <PostCardLoading/>
                            <PostCardLoading/>
                        </>
                }
            </div>
        </>
    )
}
