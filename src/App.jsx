import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      {user ? (
        <Home user={user} setUser={setUser} />
      ) : showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        <Login setUser={setUser} setShowRegister={setShowRegister} />
      )}
    </>
  );
}

export default App;
