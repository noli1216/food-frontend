import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import API from '../config/api';
import "./checkout.css";

function Checkout() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const total = state.cart.reduce((sum, item) => sum + Number(item.price), 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");

    // 🚨 VALIDATION (VERY IMPORTANT)
    if (state.cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    if (!form.phone || !form.address) {
      alert("Please fill phone and address");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          phone: form.phone,
          address: form.address,
          cart: state.cart,
          total_price: total,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Order placed successfully!");

        dispatch({ type: "CLEAR_CART" });

        navigate("/orders");
      } else {
        alert(data.message || "Order failed");
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <textarea
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />

      <h3>Total: ${total}</h3>

      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
}

export default Checkout;
