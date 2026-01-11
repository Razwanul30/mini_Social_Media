import { useState, useRef, useEffect } from "react";

function Login({ setUser }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setUser({ name });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3">Login</h2>

            <input
              ref={inputRef}
              type="text"
              className="form-control form-control-sm mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
