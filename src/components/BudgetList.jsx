import { useEffect, useState } from "react";
import axios from "axios";

const BudgetList = () => {
    const [budgets, setBudgets] = useState([]);

    const fetchBudgets = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/budgets`, {
                withCredentials: true,
            });
            setBudgets(res.data);
        } catch (err) {
            console.error("Error fetching budgets:", err);
        }
    };

    useEffect(() => {
        fetchBudgets();
    }, []);

    return (
        <div className="bg-white p-4 mt-5 rounded-lg">
            <h2 className="text-xl mb-3">Budget List</h2>
            {budgets.map((budget) => (
                <div key={budget._id} className="border p-2 mb-2">
                    Budget Limit: ${budget.limit}
                </div>
            ))}
        </div>
    );
};

export default BudgetList;
