import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./Context API";
import { toast } from "react-toastify";
function Contact() {
  const { user, API } = useContext(AuthContext);
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({
          username: "",
          email: "",
          message: "",
        });
        toast.success(`${contact.username}, your message has been sent!`);
      } else {
        toast.warn("Your message could not be sent!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "An error occurred while submitting your message. Please try again later."
      );
    }
  };

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col text-center">
            <img src="support.png" alt="Wait.." height="400px" width="420px" />
          </div>
          <div className="col">
            <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>
              Contact Us
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  User name
                </label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="User name"
                  value={contact.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email address"
                  value={contact.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  placeholder="Write message here.."
                  name="message"
                  className="form-control"
                  id="message"
                  value={contact.message}
                  onChange={handleInput}
                  rows={3}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
