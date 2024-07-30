import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        <p className="text-xl">User ID: <span className="font-mono">{userid}</span></p>
        <div className="mt-6">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
