import './App.css'
import Sidebar from "./components/sidebar/sidebar.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Posts from "./routes/posts.jsx";
import Home from "./routes/home.jsx";
import {Provider} from "react-redux";
import store from "./reducers/index.js";

export default function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "posts",
            element: <Posts/>,
        },
    ]);

    return (
        <Provider store={store}>
            <div className="flex justify-center">
                <Sidebar/>
                <div className="p-4 mt-5 w-full">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <RouterProvider router={router}/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}