import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

const App = () => {


    return (
        <UserContextProvider>
            <div className="flex min-h-screen bg-black">
                <div className="flex-1 flex items-center justify-center p-4">
                    <Login />
                </div>
                <div className="flex-1 flex items-center justify-center p-4">
                    <Profile />
                </div>
            </div>
        </UserContextProvider>
    );
}

export default App;
