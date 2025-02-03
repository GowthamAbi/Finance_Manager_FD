import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <Link to="/" className="text-xl font-bold">Finance Manager</Link>
            <div className="space-x-4">
                {user ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
