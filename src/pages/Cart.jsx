import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import API from '../config/api';
import "./cart.css";


function Cart() {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();

  console.log("CART ITEMS:", state.cart);

  const total = state.cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Cart</h1>

      {state.cart.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <div className="cart-grid">
          {state.cart.map((item) => (
            <div className="cart-card" key={item.id}>
              {/* IMAGE FIX */}
              <img
                src={
                  item.image
                    ? item.image.startsWith("http")
                      ? item.image
                      : `${API}/uploads/${item.image}`
                    : "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt={item.food_name}
                className="cart-item-image"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=No+Image";
                }}
              />

              <div className="cart-info">
                <h3>{item.food_name}</h3>

                <p className="price">${item.price}</p>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item.id,
                    })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>

        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Checkout
        </button>

        <button
          className="clear-btn"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
