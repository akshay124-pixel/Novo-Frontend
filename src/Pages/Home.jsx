import React from "react";

function Home() {
  return (
    <>
      <div className="container " style={{ marginTop: "120px" }}>
        <div className="row">
          <div className="col">
            <h1 style={{ fontWeight: "bold" }}>Welcome To Novo</h1>
            <p className="para my-5">
              Novo Site is a dynamic web platform crafted with the powerful MERN
              stack, showcasing the seamless integration of MongoDB, Express.js,
              React, and Node.js technologies. Offering an exemplary
              demonstration of modern web development, Novo Site delivers a
              sleek and responsive user interface coupled with robust backend
              functionality. Explore its engaging features and elegant design as
              it sets the standard for exemplary MERN stack implementations.
              Experience innovation and efficiency firsthand with Novo Site's
              seamless user experience and efficient backend architecture.
            </p>
            <button type="button" className="btn btn-primary">
              Connect Now
            </button>
            <button type="button" className="btn btn-outline-primary mx-3">
              Learn More
            </button>
          </div>
          <div className="col text-center">
            <img src="home.png" alt="wait.." height="400px" width="420px" />
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

      {/* section 3 */}
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img src="design.png" alt="Wait.." height="400px" width="420px" />
          </div>
          <div className="col" style={{ marginTop: "55px" }}>
            <h1 style={{ fontWeight: "bold" }}>Get Started Today</h1>
            <p className="para my-5">
              Get started with Novo Site, an exemplary showcase of MERN stack
              technology. Explore its dynamic interface and robust backend
              functionality. Experience the power of MongoDB, Express.js, React,
              and Node.js seamlessly integrated in this example site.
            </p>
            <button type="button" className="btn btn-primary">
              Connect Now
            </button>
            <button type="button" className="btn btn-outline-primary mx-3">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* section 3 End */}

      {/* Footer */}
      <div className="container ">
        <footer className="py-3 my-5">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2024 </p>
        </footer>
      </div>
    </>
  );
}

export default Home;
