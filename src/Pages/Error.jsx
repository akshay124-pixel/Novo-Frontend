import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>404 Not Found</h1>
        <p>We're sorry, but the page you are looking for cannot be found.</p>
        <p>
          It seems that the page you are trying to access either doesn't exist,
          has been removed, or there was a typo in the URL.
        </p>
        <p>
          Please check the URL for any mistakes, or go back to the homepage and
          try navigating from there.
        </p>
        <img
          src="404_image.png"
          alt="404 Not Found"
          style={{ maxWidth: "100%", marginTop: "50px" }}
        />
      </div>
      <div className="btns" style={{ marginLeft: "700px", marginTop: "20px" }}>
        <NavLink to="/">
          <button type="button" className="btn btn-danger ">
            Go Back Home
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Error;
