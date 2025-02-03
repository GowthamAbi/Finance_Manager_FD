import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, formData);
            alert("Registered successfully!");
        } catch (err) {
            console.error(err);
            alert("Registration failed!");
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <form className="bg-gray-200 p-6 rounded-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-4">Register</h2>
                <input className="block w-full p-2 mb-2" type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input className="block w-full p-2 mb-2" type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input className="block w-full p-2 mb-2" type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button className="bg-blue-500 text-white px-4 py-2">Register</button>
            </form>
        </div>
    );
};

export default Register;
