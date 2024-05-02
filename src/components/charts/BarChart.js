import React from "react";
import {Bar} from "react-chartjs-2";

const BarChart = ({data}) => {
    const labels = data.map(item => item.date);
    const amounts = data.map(item => item.amount);

    const chartData = {
        labels,
        datasets: [
            {
                label: "Amount",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
                hoverBorderColor: "rgba(75, 192, 192, 1)",
                data: amounts
            }
        ]
    };

    const chartOptions = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    };

    return (
        <div>
            <h2>Bar Chart Example</h2>
            <Bar data={chartData} options={chartOptions}/>
        </div>
    );
};

export default BarChart;
