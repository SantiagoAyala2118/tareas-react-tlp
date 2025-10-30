import "./App.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    setUsername(username);
  };

  const handleLogout = (user) => {
    setUsername("");
  };

  return (
    <>
      <div>
        <h1>Hola de nuevo {username}</h1>
      </div>
      <Register />
      <Login onLogin={handleLogin} />
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default App;
