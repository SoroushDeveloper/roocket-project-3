import H1 from "../components/headings/h1.jsx";
import useFetch from "../hooks/useFetch.js";
import Text from "../components/placeholders/text.jsx";

export default function Home() {

    const url = 'https://66170aeaed6b8fa43481e54d.mockapi.io/posts';
    const {data: posts, error, isLoading} = useFetch(url);
    const count = posts?.length;
    const text = 'There are ' + count + ' posts on the website';

    return (
        <>
            <H1 text={'Welcome'}/>
            <hr className="m-5"/>
            {
                !isLoading
                    ?
                    <p className="text-gray-900 dark:text-gray-400">
                        {text}
                    </p>
                    :
                    <div className="flex justify-center">
                        <Text/>
                    </div>
            }
        </>
    )
}