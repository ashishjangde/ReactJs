import { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="bg-blue-900 p-6 rounded shadow-md w-full max-w-xs">
                <p className="text-red-500">Please Login again...</p>
            </div>
        );
    }

    return (
        <div className="bg-blue-900 p-6 rounded shadow-md w-full max-w-xs">
            <h2 className="text-2xl font-bold mb-4 text-white">Profile</h2>
            <div className="text-white">Username: {user.username}</div>
        </div>
    );
};

export default Profile;
