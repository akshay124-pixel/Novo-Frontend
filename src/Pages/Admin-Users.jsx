import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./Context API";
import { Link } from "react-router-dom";

function AdminUsers() {
  const { authorizationToken, API } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("users:", data);
      setUsers(data);
    } catch (error) {
      console.log("Here Some Error....", error);
    }
  };

  const deleteuser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/user/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, [authorizationToken]);

  return (
    <>
      <div
        className="container"
        style={{ marginLeft: "120px", marginRight: "20px", marginTop: "40px" }}
      >
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{curUser.username}</td>
                <td>{curUser.email}</td>
                <td>{curUser.phone}</td>
                <td>
                  <button className="btn btn-success">
                    <Link
                      to={`/admin/user/${curUser._id}/edit`}
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Edit
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteuser(curUser._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminUsers;
