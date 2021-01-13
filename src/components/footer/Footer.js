import React from "react";
import {
  FaPhoneVolume,
  FaEnvelope,
  FaLocationArrow,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="footer-sec1">
        <div className="info grid-3 container">
          <div className="grid-2">
            <div style={{ textAlign: "center" }} className="iconsaw">
              <div className="ic-edit">
                <FaPhoneVolume />
              </div>
            </div>
            <h3>
              Phone <br />
              <span>+01 123-456-4590</span>
            </h3>
          </div>
          <div className="grid-2">
            <div style={{ textAlign: "center" }} className="iconsaw">
              <div className="ic-edit">
                <FaEnvelope />
              </div>
            </div>

            <h3>
              Email <br />
              <span>yourmail@gmail.com</span>
            </h3>
          </div>
          <div className="grid-2">
            <div style={{ textAlign: "center" }} className="iconsaw">
              <div className="ic-edit">
                <FaLocationArrow />
              </div>
            </div>

            <h3>
              Location <br />
              <span>800, Lorem Street, US</span>
            </h3>
          </div>
        </div>
      </section>
      <section className="footer-sec2">
        <div className="overlay"></div>
        <div className="container">
          <div className="grid-4">
            <div>
              <h2>About Us</h2>
              <p>
                Integer cursus scelerisque ipsum id efficitur. Donec a dui
                fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac
                lectus a interdum. Vivamus semper posuere dui, at ornare turpis
                ultrices sit amet. Nulla cursus lorem ut nisi porta, ac eleifend
                arcu ultrices
              </p>
            </div>
            <div>
              <h2>Opening hours</h2>
              <p>Monday:Closed</p>
              <p>Tue-Wed : 9:Am - 10PM</p>
              <p>Thu-Fri : 9:Am - 10PM</p>
              <p>Sat-Sun : 5:PM - 10PM</p>
            </div>
            <div>
              <h2>Contact information</h2>
              <p>Ipsum Street, Lorem Tower, MO, Columbia, 508000</p>
              <p>+01 2000 800 9999</p>
              <p>info@admin.com</p>
            </div>
            <div>
              <h2>Subscribe</h2>
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>
        </div>
      </section>
      <section className="footer-sec3">
        <p>All Rights Reserved. {new Date().getFullYear()}</p>
      </section>
    </footer>
  );
};

export default Footer;
