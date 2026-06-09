import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import API from '../config/api';
import "./menu.css";

function Menu() {
  const [menus, setMenus] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    fetch(`${API}/api/menus`)
      .then((res) => res.json())
      .then((data) => setMenus(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="menu-container">
      <h1 className="menu-title">🍽 Ethiopian Food Menu</h1>

      <div className="menu-grid">
        {menus.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.food_name} className="menu-image" />

            <div className="menu-info">
              <h3>{item.food_name}</h3>
              <p>{item.description}</p>

              <div className="price">${item.price}</div>

              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: item,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
