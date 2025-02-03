import { useEffect, useState } from "react";
import axios from "axios";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/expenses`, {
                headers: { "x-auth-token": localStorage.getItem("token") },
            });
            setExpenses(res.data);
        } catch (err) {
            console.error("Error fetching expenses:", err);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div className="bg-white p-4 mt-5 rounded-lg">
            <h2 className="text-xl mb-3">Expense List</h2>
            {expenses.map((expense) => (
                <div key={expense._id} className="border p-2 mb-2">
                    {expense.category} - ${expense.amount}
                </div>
            ))}
        </div>
    );
};

export default ExpenseList;
