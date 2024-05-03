import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./Context API";
import { toast } from "react-toastify";
function AdminContacts() {
  const { authorizationToken } = useContext(AuthContext);
  const [contactData, setContactData] = useState([]);

  const getAllContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contact", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("contacts:", data);
        setContactData(data);
      } else {
        console.log("Failed to fetch contact data");
      }
    } catch (error) {
      console.log("Error fetching contact data:", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contact/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getAllContactData();
        toast.success("Successfully Deleted");
      } else {
        toast.error("Failed to Delete");
      }
    } catch (error) {
      console.log("Error deleting Contact:", error);
    }
  };

  useEffect(() => {
    getAllContactData();
  }, [authorizationToken]);

  return (
    <div className="container my-5">
      <div className="row">
        {contactData.map((curContact, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-header">Contact Information</div>
              <div className="card-body">
                <p className="card-text">Username: {curContact.username}</p>
                <p className="card-text">Email: {curContact.email}</p>
                <p className="card-text">Message: {curContact.message}</p>
              </div>
              <div className="card-footer">
                <button
                  type="button"
                  onClick={() => deleteContact(curContact._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminContacts;
