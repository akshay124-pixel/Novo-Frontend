import React, { useContext } from "react";
import { AuthContext } from "../Pages/Context API";

function Service() {
  const { service } = useContext(AuthContext);

  return (
    <>
      <section className="section-services" style={{ marginLeft: "65px" }}>
        <div className="container">
          <h1
            className="main-heading my-3"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Services
          </h1>
        </div>
        <div className="container grid grid-row my-4">
          <div className="grid-row">
            {Array.isArray(service) &&
              service.map((serviceItem, index) => {
                const { price, description, provider, service } = serviceItem;
                return (
                  <div
                    className="card"
                    key={index}
                    style={{
                      display: "inline-block",
                      width: "calc(30.33% - 0px)", // Set width to 33.33% of container width
                      marginRight: "35px",
                      marginBottom: "50px", // Add some bottom margin for spacing
                    }}
                  >
                    <div className="card-img">
                      <img
                        style={{ marginLeft: "50px" }}
                        src="design.png"
                        alt="Wait.."
                        width="285"
                        height="215"
                      />
                    </div>
                    <div className="card-details">
                      <h2
                        style={{
                          fontWeight: "bolder",
                          marginLeft: "10px",
                          marginTop: "10px",
                        }}
                      >
                        {service}
                      </h2>
                      <div className="grid grid-two-cols">
                        <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
                          Provider : {provider}
                        </p>
                        <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
                          Price : {price}$
                        </p>
                      </div>
                      <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
                        {description}.
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
