import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Pages/Context API";
import { RiAdminLine } from "react-icons/ri";
function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between">
        <div>
          <NavLink
            style={{
              fontWeight: "bold",
              color: "blue",
              marginLeft: "150px",
            }}
            className="navbar-brand"
            to="/"
          >
            NoVo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginRight: "150px" }}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/admin"
                style={{ fontWeight: "bold" }}
                activeStyle={{ color: "lightblue" }}
              >
                <RiAdminLine />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/"
                style={{ fontWeight: "bold" }}
                activeStyle={{ color: "lightblue" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={{ fontWeight: "bold" }}
                activeStyle={{ color: "lightblue" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/service"
                style={{ fontWeight: "bold" }}
                activeStyle={{ color: "lightblue" }}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={{ fontWeight: "bold" }}
                activeStyle={{ color: "lightblue" }}
              >
                ContactUs
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/logout"
                  style={{ fontWeight: "bold" }}
                  activeStyle={{ color: "lightblue" }}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/register"
                    style={{ fontWeight: "bold" }}
                    activeStyle={{ color: "lightblue" }}
                  >
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/login"
                    style={{ fontWeight: "bold" }}
                    activeStyle={{ color: "lightblue" }}
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
