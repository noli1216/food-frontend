import { Link } from "react-router-dom";
import "./admin.css";

function Admin() {
  return (
    <div className="admin-wrapper">
      {/* SIDEBAR */}
      <div className="admin-sidebar">
        <h2>👨‍💼 Admin Panel</h2>

        <Link to="/adminmenu">📋 Manage Menu</Link>
        <Link to="/addmenu">➕ Add Menu</Link>
        <Link to="/admin-orders">🧾 Orders</Link>
        <Link to="/users">👥 Users</Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="admin-content">
        <h1>Welcome Admin Dashboard</h1>
        <p>Manage your system from here</p>
      </div>
    </div>
  );
}

export default Admin;
