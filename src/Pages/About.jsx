import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Context API";

function About() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 style={{ fontWeight: "bold", marginTop: "100px" }}>About Us</h1>
            <h5>Hi {user ? user.username : "Buddy"}, Welcome to Novo!</h5>

            <br></br>
            <p>
              We are a team of dedicated professionals committed to delivering
              exceptional solutions. With a wealth of experience and expertise,
              we tackle every project with passion and precision. Our goal is to
              exceed client expectations and create impactful digital
              experiences. From design to development, we ensure every detail is
              meticulously crafted to perfection. Driven by innovation and
              creativity, we thrive on challenges and embrace new technologies.
              Collaboration and communication are at the heart of our approach,
              fostering strong partnerships. We believe in continuous
              improvement and staying ahead of industry trends. Your success is
              our priority, and we are here to support your journey every step
              of the way. Let's work together to turn your vision into reality
              and achieve remarkable results. Get in touch with us today and
              discover the difference we can make for your business.
            </p>
            <br />
            <p>
              Feel free to customize the content according to your
              organization's values and goals!
            </p>
            <NavLink to="/contact">
              <button type="button" className="btn btn-primary">
                Contact Us
              </button>
            </NavLink>
          </div>
          <div className="col text-center">
            <img
              src="about.png"
              alt="Wait.."
              height="400px"
              width="420px"
              style={{ marginTop: "100px" }}
            />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols ">
          <div
            className="div1"
            style={{ marginTop: "15px", marginLeft: "100px" }}
          >
            <h2>50+</h2>
            <p>Registered Companies</p>
          </div>
          <div
            className="div1"
            style={{ marginTop: "15px", marginLeft: "100px" }}
          >
            <h2>100,000</h2>
            <p>Happy Clients</p>
          </div>
          <div
            className="div1"
            style={{ marginTop: "15px", marginLeft: "100px" }}
          >
            <h2>500+</h2>
            <p>Well-Known Developers</p>
          </div>
          <div
            className="div1"
            style={{ marginTop: "15px", marginLeft: "100px" }}
          >
            <h2>24/7</h2>
            <p>Services</p>
          </div>
        </div>
      </section>
      {/* section 2 End */}
      {/* Footer */}
      <div className="container" style={{ marginTop: "150px" }}>
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <NavLink to="/" className="nav-link px-2 text-body-secondary">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/features"
                className="nav-link px-2 text-body-secondary"
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pricing"
                className="nav-link px-2 text-body-secondary"
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faqs" className="nav-link px-2 text-body-secondary">
                FAQs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link px-2 text-body-secondary"
              >
                About
              </NavLink>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2024</p>
        </footer>
      </div>
    </>
  );
}

export default About;
