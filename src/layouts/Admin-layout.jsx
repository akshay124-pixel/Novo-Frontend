import React, { useContext } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { AuthContext } from "../Pages/Context API";
function Adminlayout(props) {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div
        className="spinner-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary rounded"
        aria-label="Twelfth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample10"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/admin/adminuser"
                  {...props}
                  style={{ fontWeight: "bold" }}
                >
                  <FaUser /> Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/admin/admincontact"
                  {...props}
                  style={{ fontWeight: "bold" }}
                >
                  <BiSolidContact style={{ marginRight: "5px" }} />
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/admin/adminservice"
                  {...props}
                  style={{ fontWeight: "bold" }}
                >
                  <GrServices /> Services
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />

      {/* End Navbar */}
    </>
  );
}

export default Adminlayout;
