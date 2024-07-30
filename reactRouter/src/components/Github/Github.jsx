// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`https://api.github.com/users/hiteshchoudhary`)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("There was a problem with the fetch operation:", error);
//         setError(error);
//         setLoading(false);
//       });
//   }, []);


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">GitHub Profile</h1>
        <img src={data.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold">{data.name}</h2>
        <p className="text-gray-600">{data.login}</p>
        <div className="mt-4">
          <p className="text-lg">Followers: <span className="font-bold">{data.followers}</span></p>
          <p className="text-lg">Following: <span className="font-bold">{data.following}</span></p>
          <p className="text-lg">Public Repos: <span className="font-bold">{data.public_repos}</span></p>
        </div>
      </div>
    </div>
  );
}

export default Github;

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
export const githubInfoLoader = async()=>{
    const response = await fetch(`https://api.github.com/users/hiteshchoudhary`);
    if (!response.ok){
        throw new Error("Network error");
    }else return await response.json();

}