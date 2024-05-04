import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

export default function BarChart({chartData}) {
    let labels = [];
    let amounts = [];
    chartData.map(item => labels.push(item.date));
    chartData.map(item => amounts.push(item.amount));
    const data = {
        labels,
        datasets: [
            {
                label: 'Amount',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: amounts,
            }
        ],
    };

    return (
        <Bar options={options} data={data}/>
    )
}
