import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./Context API";
import { toast } from "react-toastify";
function AdminUpdate() {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const { authorizationToken } = useContext(AuthContext);
  const params = useParams();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `https://novo-backend-server-1qds.onrender.com/api/admin/user/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        const userData = await response.json();
        setData(userData);
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://novo-backend-server-1qds.onrender.com/api/admin/user/update/${params.id}`, // Include params.id in the URL
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data), // Send the updated data in the request body
        }
      );
      if (response.ok) {
        toast.success("Profile successfully edited!").router.push("/adminuser");
      } else {
        toast.error("Failed to edit profile.");
      }
    } catch (error) {
      console.log("Error updating user data:", error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, [authorizationToken, params.id]);

  return (
    <>
      <div className="Box" style={{ marginLeft: "100px", marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <h1>Update User</h1>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={data.username}
                    onChange={handleInput}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleInput}
                    className="form-control"
                    aria-describedby="emailHelp"
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
                    value={data.phone}
                    onChange={handleInput}
                    type="phone"
                    name="phone"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
            {/* Image */}
            <div className="col text-center">
              <img src="/info.png" alt="wait.." height="400px" width="400px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUpdate;
