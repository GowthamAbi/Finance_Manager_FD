import { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Charts = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [{ data: [], backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/expenses`, {
                    withCredentials: true,
                });

                const categories = {};
                res.data.forEach((expense) => {
                    categories[expense.category] = (categories[expense.category] || 0) + expense.amount;
                });

                setData({
                    labels: Object.keys(categories),
                    datasets: [{ data: Object.values(categories), backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }],
                });
            } catch (err) {
                console.error("Error fetching chart data:", err);
            }
        };

        fetchData();
    }, []);

    return <Doughnut data={data} />;
};

export default Charts;
