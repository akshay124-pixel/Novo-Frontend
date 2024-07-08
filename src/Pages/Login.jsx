import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Pages/Context API";
import { toast } from "react-toastify";
function Login() {
  const { storetokenInLS, API } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://novo-backend-server-1qds.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const res_data = await response.json();
      if (response.ok) {
        toast.success("Logged in successfully!");
        storetokenInLS(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "An error occurred while logging in. Please try again later."
      );
    }
  };

  return (
    <div className="container" style={{ marginTop: "130px" }}>
      <div className="row">
        <div className="col text-center">
          <img src="login.png" alt="Wait.." height="400px" width="420px" />
        </div>
        <div className="col">
          <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
                id="email"
                value={user.email}
                onChange={handleInput}
              />
              <div id="email" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                className="form-control"
                id="password"
                value={user.password}
                onChange={handleInput}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
