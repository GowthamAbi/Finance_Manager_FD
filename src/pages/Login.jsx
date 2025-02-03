import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { login } = useContext(AuthContext);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData.email, formData.password);
    };

    return (
        <div className="flex justify-center mt-10">
            <form className="bg-gray-200 p-6 rounded-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-4">Login</h2>
                <input className="block w-full p-2 mb-2" type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input className="block w-full p-2 mb-2" type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button className="bg-blue-500 text-white px-4 py-2">Login</button>
            </form>
        </div>
    );
};

export default Login;
