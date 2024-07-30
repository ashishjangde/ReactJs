import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return (
        <div className="flex flex-col items-center justify-center bg-blue-900 p-6 rounded shadow-md w-full max-w-xs">
            <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
            <input
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="mb-2 p-2 border border-blue-700 rounded w-full text-white bg-gray-800"
            />
            <input
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="mb-4 p-2 border border-blue-700 rounded w-full text-white bg-gray-800"
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            >
                Submit
            </button>
        </div>
    );
};

export default Login;
