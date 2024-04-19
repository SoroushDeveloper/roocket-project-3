import H1 from "../components/headings/h1.jsx";
import Index from "../components/posts/index.jsx";
import Create from "../components/buttons/create.jsx";
import NewPost from "../components/modals/newPost.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Error from "../components/toasts/error.js";

export default function Posts() {
    const url = 'https://66170aeaed6b8fa43481e54d.mockapi.io/posts';
    const [posts, setPosts] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const handleSetPosts = (data) => {
        setPosts(data);
    };
    useEffect(() => {
        axios.get(url)
            .then(function (response) {
                handleSetPosts(response.data)
                setIsLoading(false);
            })
            .catch(function (error) {
                Error(error);
            });
    }, [url]);
    const [showModal, setShowModal] = useState(false);
    const showModalHandler = () => {
        setShowModal(true);
    }
    const hideModalHandler = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="flex justify-between">
                <H1 text="Posts List"/>
                <Create onClickHandler={showModalHandler}/>
            </div>
            <Index posts={posts} isLoading={isLoading} onDataReceived={handleSetPosts}/>
            <NewPost showModal={showModal} hideModalHandler={hideModalHandler} onDataReceived={handleSetPosts}
                     posts={posts}/>
        </>
    )
}