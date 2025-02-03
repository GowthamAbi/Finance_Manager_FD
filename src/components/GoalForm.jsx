import { useState } from "react";
import axios from "axios";

const GoalForm = ({ refreshGoals }) => {
    const [goal, setGoal] = useState({ targetAmount: "", description: "" });

    const handleChange = (e) => setGoal({ ...goal, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/goals`, goal, {
                headers: { "x-auth-token": localStorage.getItem("token") },
            });
            refreshGoals();
            setGoal({ targetAmount: "", description: "" });
        } catch (err) {
            console.error("Error adding goal:", err);
        }
    };

    return (
        <form className="bg-gray-200 p-4 rounded-lg" onSubmit={handleSubmit}>
            <h2 className="text-xl mb-3">Set Financial Goal</h2>
            <input type="number" name="targetAmount" placeholder="Target Amount" onChange={handleChange} value={goal.targetAmount} className="block w-full p-2 mb-2"/>
            <input type="text" name="description" placeholder="Goal Description" onChange={handleChange} value={goal.description} className="block w-full p-2 mb-2"/>
            <button className="bg-blue-500 text-white px-4 py-2">Set Goal</button>
        </form>
    );
};

export default GoalForm;
