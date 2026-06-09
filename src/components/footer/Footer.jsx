import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <h2>Mesi Catering 🍽️</h2>
          <p>
            Authentic Ethiopian food made fresh for weddings, parties, and
            family events.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/menu">Menu</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-right">
          <h3>Contact</h3>

          <p>
            <FaPhone /> +1 (000) 123-4567
          </p>
          <p>
            <FaEnvelope /> mesicatering@gmail.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mesi Catering. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
