import { useState } from "react";
import axios from "axios";

const ExpenseForm = ({ refreshExpenses }) => {
    const [expense, setExpense] = useState({ amount: "", category: "", description: "" });

    const handleChange = (e) => setExpense({ ...expense, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/expenses`, expense, {
                headers: { "x-auth-token": localStorage.getItem("token") },
            });
            refreshExpenses();
            setExpense({ amount: "", category: "", description: "" });
        } catch (err) {
            console.error("Error adding expense:", err);
        }
    };

    return (
        <form className="bg-gray-200 p-4 rounded-lg" onSubmit={handleSubmit}>
            <h2 className="text-xl mb-3">Add Expense</h2>
            <input type="number" name="amount" placeholder="Amount" onChange={handleChange} value={expense.amount} className="block w-full p-2 mb-2"/>
            <input type="text" name="category" placeholder="Category" onChange={handleChange} value={expense.category} className="block w-full p-2 mb-2"/>
            <input type="text" name="description" placeholder="Description" onChange={handleChange} value={expense.description} className="block w-full p-2 mb-2"/>
            <button className="bg-blue-500 text-white px-4 py-2">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
