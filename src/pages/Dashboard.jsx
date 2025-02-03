import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import BudgetForm from "../components/BudgetForm";
import GoalForm from "../components/GoalForm";

const Dashboard = () => {
    return (
        <div className="p-5">
            <h1 className="text-3xl mb-5">Dashboard</h1>
            <div className="grid grid-cols-2 gap-4">
                <ExpenseForm />
                <ExpenseList />
                <BudgetForm />
                <GoalForm />
            </div>
        </div>
    );
};

export default Dashboard;
