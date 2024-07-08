import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Pages/Context API";
import { toast } from "react-toastify";
function Register() {
  const { storetokenInLS } = useContext(AuthContext);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  // handle input change
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://novo-backend-server-1qds.onrender.com/api/auth/Register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      const res_data = await response.json();

      if (response.ok) {
        toast.success(user.username + ", your account has been created!");
        storetokenInLS(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
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
      toast.warn("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container" style={{ marginTop: "65px" }}>
      <div className="row">
        {/* SVG */}
        <div className="col text-center">
          <img src="register.png" alt="Wait.." height="400px" width="420px" />
        </div>
        {/* Form */}
        <div className="col">
          <div className="registration-form">
            <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>
              Registration Form
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  UserName
                </label>
                <input
                  name="username"
                  placeholder="Enter Your Username"
                  type="text"
                  className="form-control"
                  id="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  className="form-control"
                  id="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  className="form-control"
                  id="phone"
                  aria-describedby="emailHelp"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                  id="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                />
                <label className="form-check-label" htmlFor="check">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
