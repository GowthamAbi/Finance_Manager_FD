import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="p-5">
            <h1 className="text-3xl">Profile</h1>
            {user ? (
                <div className="mt-5 p-5 border rounded-lg bg-white">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            ) : (
                <p>Please log in.</p>
            )}
        </div>
    );
};

export default Profile;
