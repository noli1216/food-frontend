import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from '../config/api';
import "./adminMenu.css";

function AdminMenu() {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  const getMenus = async () => {
    const response = await fetch(`${API}/api/menus`);

    const data = await response.json();

    setMenus(data);
  };

  useEffect(() => {
    getMenus();
  }, []);

  // DELETE
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this menu?");

    if (!confirmDelete) return;

    await fetch(`${API}/api/menu/${id}`, {
      method: "DELETE",
    });

    getMenus();
  };

  return (
    <div className="adminmenu-container">
      <h1 className="adminmenu-title">Admin Food Menu 🍽️</h1>

      <div className="adminmenu-grid">
        {menus.map((item) => (
          <div className="adminmenu-card" key={item.id}>
            <img
              src={item.image}
              alt={item.food_name}
              className="adminmenu-image"
            />

            <div className="adminmenu-info">
              <h2>{item.food_name}</h2>

              <p>{item.description}</p>

              <h3>${item.price}</h3>

              <span>{item.category}</span>

              <div className="adminmenu-buttons">
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/editmenu/${item.id}`)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
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

export default AdminMenu;
