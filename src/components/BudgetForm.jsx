import { useState } from "react";
import axios from "axios";

const BudgetForm = ({ refreshBudgets }) => {
    const [budget, setBudget] = useState({ limit: "" });

    const handleChange = (e) => setBudget({ ...budget, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/budgets`, budget, {
                headers: { "x-auth-token": localStorage.getItem("token") },
            });
            refreshBudgets();
            setBudget({ limit: "" });
        } catch (err) {
            console.error("Error setting budget:", err);
        }
    };

    return (
        <form className="bg-gray-200 p-4 rounded-lg" onSubmit={handleSubmit}>
            <h2 className="text-xl mb-3">Set Budget</h2>
            <input type="number" name="limit" placeholder="Budget Limit" onChange={handleChange} value={budget.limit} className="block w-full p-2 mb-2"/>
            <button className="bg-blue-500 text-white px-4 py-2">Set Budget</button>
        </form>
    );
};

export default BudgetForm;
