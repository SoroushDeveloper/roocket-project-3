import {useState} from "react";
import axios from "axios";

import LoginButton from "../components/buttons/login.jsx";
import H1 from "../components/headings/h1.jsx";
import Success from "../components/toasts/success.js";
import Error from "../components/toasts/error.js";
import {useDispatch, useSelector} from "react-redux";
import {hasToken, setToken, setUsername} from '../features/authSlice.js';
import Loading from "../components/buttons/loading.jsx";

export default function Login() {
    const url = 'https://react-camp-api.roocket.ir/api/admin/login';
    const dispatch = useDispatch();
    dispatch(hasToken());
    const isAuth = useSelector((state) => state.auth.status);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        let data = {
            email: email,
            password: password,
        }
        axios.post(url, data)
            .then(function (response) {
                Success('You logged in successfully!');
                dispatch(setToken(response.data.token));
                dispatch(setUsername(response.data.name));
                setTimeout(function () {
                    window.location.replace('/');
                }, 1000);
            })
            .catch(function (error) {
                Error(error.response.data.message);
            })
            .finally(function () {
                setIsLoading(false);
            });
    }

    if (isAuth) {
        window.location.replace('/')
    } else {
        return (
            <div className="sm:px-96">
                <form onSubmit={handleSubmit}>
                    <div>
                        <H1 text={'Log In'}/>
                        <p className="mt-5 text-gray-800 dark:text-gray-200">
                            You need to login before continue
                        </p>
                    </div>
                    <hr className="mt-2"/>
                    <div className="grid grid-cols-1 mt-5">
                        <div className="text-left">
                            <label htmlFor="email" className="text-gray-900 dark:text-gray-100 ml-1">
                                Email
                            </label>
                            <input type="email" id="email" name="email" placeholder="address@example.com" required
                                   value={email} onChange={(e) => setEmail(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="text-left mt-5">
                            <label htmlFor="password" className="text-gray-900 dark:text-gray-100 ml-1">
                                Password
                            </label>
                            <input type="password" id="password" name="password" placeholder="Your pass key" required
                                   value={password} onChange={(e) => setPassword(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        {isLoading ? <Loading/> : <LoginButton/>}
                    </div>
                </form>
            </div>
        )
    }
}