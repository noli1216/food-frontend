import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from '../config/api';
import "./addmenu.css";

function EditMenu() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    food_name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  // LOAD EXISTING DATA
  const getMenuById = async () => {
    try {
      const res = await fetch(`${API}/api/menu/${id}`);

      const data = await res.json();
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMenuById();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATE MENU
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/api/menu/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      alert(data.message);

      navigate("/adminmenu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addmenu-container">
      <div className="addmenu-card">
        <h1 className="addmenu-title">Edit Menu ✏️</h1>

        <form className="addmenu-form" onSubmit={handleUpdate}>
          <input
            className="addmenu-input"
            name="food_name"
            value={formData.food_name}
            onChange={handleChange}
            placeholder="Food Name"
          />

          <textarea
            className="addmenu-textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />

          <input
            className="addmenu-input"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />

          <input
            className="addmenu-input"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />

          <input
            className="addmenu-input"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />

          <button className="addmenu-button" type="submit">
            Update Menu
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditMenu;
