import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaUtensils } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import "./header.css";

function Header() {
  const navigate = useNavigate();

  // 🛒 CART STATE
  const { state } = useCart();

  // 👤 USER FROM LOCALSTORAGE
  const storedUser = localStorage.getItem("user");

  const user =
    storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;

  // 🚪 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="header">
      {/* LOGO */}
      <div className="header-logo">
        <Link to="/home">
          <FaUtensils className="logo-icon" />
          <span>Mesi Catering</span>
        </Link>
      </div>

      {/* NAVIGATION */}
      <nav className="desktop-nav">
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>

        <Link to="/cart" className="cart-link">
          <FaShoppingCart />
          <span>Cart</span>
          <span className="cart-badge">{state.cart.length}</span>
        </Link>

        <Link to="/orders">Orders</Link>

        {/* ONLY ONE ADMIN BUTTON */}
        {user?.role === "admin" && <Link to="/admin">Admin Dashboard</Link>}
      </nav>

      {/* USER SECTION */}
      <div className="user-section">
        {user ? (
          <div className="user-info">
            <div className="user-profile">
              {user.image ? (
                <img src={user.image} alt="user" />
              ) : (
                <FaUserCircle className="default-user" />
              )}

              <span>{user.name}</span>
            </div>

            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login">Login</Link>
            <Link to="/register" className="register-btn">
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
