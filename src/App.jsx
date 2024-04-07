import './App.css'
import Sidebar from "./components/partial/sidebar.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./routes/home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
]);

function App() {
    return (
        <>
            <Sidebar/>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <RouterProvider router={router}/>
                </div>
            </div>
        </>
    )
}

export default App
