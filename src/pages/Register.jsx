import { useState, useRef, useEffect } from "react";
import api from "../api/api";

function Register({ setShowRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration successful. Please login.");
      setShowRegister(false);
    } catch (error) {
      setError(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3 text-center">Register</h2>

            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            <input
              ref={inputRef}
              type="text"
              className="form-control mb-3"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-success w-100"
            >
              Register
            </button>

            <p className="text-center mt-3">
              Already have an account?{" "}
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => setShowRegister(false)}
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;