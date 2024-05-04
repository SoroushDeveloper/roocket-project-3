import H1 from "../components/headings/h1.jsx";
import ShowLink from "../components/partial/showLink.jsx";
import Error from "../components/toasts/error.js";

import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getToken, hasToken} from "../features/authSlice.js";
import BarChart from "../components/charts/BarChart.jsx";
import BarChartLoading from "../components/placeholders/barChart.jsx";

export default function Home() {
    const [chartData, setChartData] = useState(null);
    const dispatch = useDispatch();
    dispatch(hasToken());
    dispatch(getToken());
    const isAuth = useSelector((state) => state.auth.status);
    const token = useSelector((state) => state.auth.token);

    const url = 'https://react-camp-api.roocket.ir/api/admin/dashboard';
    const headers = {Authorization: `Bearer ${token}`}
    const getChartData = async () => {
        try {
            const response = await axios.get(url, {headers});
            setChartData(response.data.data);
        } catch (error) {
            Error(error.response.data.message);
        }
    };

    useEffect(() => {
        getChartData();
    }, []);

    if (isAuth) {
        return (
            <>
                <H1 text={'Welcome'}/>
                <br/>
                <div className="flex justify-center">
                    <ShowLink props={{title: 'Show Posts', link: '/posts'}}/>
                </div>
                <hr className="m-5"/>
                <H1 text={'Statistics'}/>
                <br/>
                {chartData !== null ? <BarChart chartData={chartData}/> : <BarChartLoading/>}
            </>
        )
    } else
        window.location.replace('/login');
}