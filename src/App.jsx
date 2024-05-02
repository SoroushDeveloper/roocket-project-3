import './App.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./reducers/index.js";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from "./routes/login.jsx";
import Home from "./routes/home.jsx";
import Posts from "./routes/posts.jsx";
import Header from "./components/layouts/header.jsx";
import Footer from "./components/layouts/footer.jsx";

export default function App() {

    const router = createBrowserRouter([
        {
            path: "/login",
            element: <Login/>,
        },
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
                <Header/>
                <div className="p-4 mt-5 w-full">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <RouterProvider router={router}/>
                    </div>
                </div>
                <Footer/>
            </div>
            <ToastContainer/>
        </Provider>
    )
}