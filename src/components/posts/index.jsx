import PostItem from "./postItem.jsx";
import '../../assets/styles/posts.css';
import useFetch from "../../hooks/useFetch.js";
import PostLoading from "./postLoading.jsx";

export default function Index() {
    const url = 'https://66170aeaed6b8fa43481e54d.mockapi.io/posts';
    const {data: posts, error, isLoading} = useFetch(url);

    return (
        <>
            <table className="w-full text-black dark:text-gray-400 mt-5 border rounded-full table-auto grid sm:table">
                <thead>
                <tr className>
                    <th className="p-5 text-center">
                        #
                    </th>
                    <th className="p-5 text-center">
                        Title
                    </th>
                    <th className="p-5 text-center">
                        Creation Date
                    </th>
                    <th className="p-5 text-center">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    !isLoading
                        ?
                        posts && posts.map((post) => {
                            return (<PostItem key={post?.id} post={post}/>);
                        })
                        :
                        <>
                            <PostLoading/>
                            <PostLoading/>
                            <PostLoading/>
                            <PostLoading/>
                            <PostLoading/>
                        </>
                }
                </tbody>
            </table>
        </>
    )
}
