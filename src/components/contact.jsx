import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          
          {/* Contact Info */}
          <div
            className="contact-info"
            style={{
              flex: "1 1 300px",
              maxWidth: "400px",
              minWidth: "280px",
            }}
          >
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                <a className="telephone" href="tel:+16478259664">
                  {props.data ? props.data.phone : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>

            <div className="social" style={{ marginTop: "20px" }}>
              <ul style={{ display: "flex", gap: "15px", padding: 0, listStyle: "none" }}>
                <li>
                  <a href={props.data ? props.data.facebook : "/"}>
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.twitter : "/"}>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.youtube : "/"}>
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div
            className="map-container"
            style={{
              flex: "2 1 500px",
              minWidth: "280px",
              height: "250px",
            }}
          >
            <iframe
              title="NIA Services Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.9038807652937!2d-79.7100032!3d43.608542899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b41e9fcecfb17%3A0xcde247c24926a4fc!2sNIA%20Services%20Mississauga!5e0!3m2!1sar!2sca!4v1753401289275!5m2!1sar!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 NIA Services. Design by{" "}
            <a href="https://ajwebcraft.netlify.app/" rel="nofollow">
              AJWebCraft
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
