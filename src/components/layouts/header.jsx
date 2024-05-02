import Sidebar from "../sidebar/sidebar.jsx";
import LogoutButton from "../buttons/logout.jsx";

import {useDispatch, useSelector} from "react-redux";
import {getToken, getUsername, hasToken, logout} from "../../features/authSlice.js";

export default function Header() {
    const dispatch = useDispatch();
    dispatch(hasToken());
    dispatch(getToken());
    dispatch(getUsername());
    const isAuth = useSelector((state) => state.auth.status);
    const username = useSelector((state) => state.auth.username);

    const logoutHandler = () => {
        dispatch(logout());
        window.location.replace('/login');
    }

    if (isAuth) {
        return (
            <>
                <LogoutButton onClickHandler={logoutHandler}/>
                <div className="text-center fixed top-0 mt-2">
                    <p className="text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 p-2 rounded">
                        {username}
                    </p>
                </div>
                <Sidebar/>
            </>
        )
    }
}