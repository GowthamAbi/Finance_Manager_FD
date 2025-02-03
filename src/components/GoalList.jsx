import { useEffect, useState } from "react";
import axios from "axios";

const GoalList = () => {
    const [goals, setGoals] = useState([]);

    const fetchGoals = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/goals`, {
                withCredentials: true,
            });
            setGoals(res.data);
        } catch (err) {
            console.error("Error fetching goals:", err);
        }
    };

    useEffect(() => {
        fetchGoals();
    }, []);

    return (
        <div className="bg-white p-4 mt-5 rounded-lg">
            <h2 className="text-xl mb-3">Goal List</h2>
            {goals.map((goal) => (
                <div key={goal._id} className="border p-2 mb-2">
                    Target: ${goal.targetAmount} - {goal.description}
                </div>
            ))}
        </div>
    );
};

export default GoalList;
