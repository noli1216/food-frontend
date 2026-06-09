import { useState } from "react";
import API from '../config/api';
import "./addmenu.css";

function AddMenu() {
  const [formData, setFormData] = useState({
    food_name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API}/api/addmenu`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      alert(data.message);

      setFormData({
        food_name: "",
        description: "",
        price: "",
        image: "",
        category: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="addmenu-container">
      <div className="addmenu-card">
        <h1 className="addmenu-title">Add Ethiopian Food 🍽️</h1>

        <form className="addmenu-form" onSubmit={handleSubmit}>
          <input
            className="addmenu-input"
            type="text"
            name="food_name"
            placeholder="Food Name"
            value={formData.food_name}
            onChange={handleChange}
            required
          />

          <textarea
            className="addmenu-textarea"
            name="description"
            placeholder="Food Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            className="addmenu-input"
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            className="addmenu-input"
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />

          <input
            className="addmenu-input"
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />

          <button className="addmenu-button" type="submit">
            Add Menu
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMenu;
