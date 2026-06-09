import { useEffect, useState } from "react";
import API from '../config/api';  
import "./adminOrders.css";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  // ✅ GET ALL ORDERS
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${API}/api/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("ADMIN ORDERS:", data);
        setOrders(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.log(err));
  }, []);

  // ✅ SINGLE CLEAN updateStatus FUNCTION
  const updateStatus = async (id, status) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        `${API}/api/orders/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        console.log("STATUS UPDATED:", data);

        // 🔥 refresh orders from DB
        const refresh = await fetch(
          `${import.meta.env.VITE_API_URL}/api/orders`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const newData = await refresh.json();
        setOrders(newData);
      } else {
        alert(data.message || "Failed to update status");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-container">
      <h1>👨‍💼 Admin Orders Dashboard</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.id}>
            <h3>Order #{order.id}</h3>

            <p>
              <b>Phone:</b> {order.phone}
            </p>

            <p>
              <b>Address:</b> {order.address}
            </p>

            <p>
              <b>Status:</b>{" "}
              <span className={`status ${order.status}`}>{order.status}</span>
            </p>

            <h4>Items:</h4>
            <ul>
              {order.items?.map((item) => (
                <li key={item.id}>
                  {item.food_name} - ${item.price}
                </li>
              ))}
            </ul>

            <h3>Total: ${order.total_price}</h3>

            {/* STATUS BUTTONS */}
            <div className="status-buttons">
              <button onClick={() => updateStatus(order.id, "pending")}>
                Pending
              </button>

              <button onClick={() => updateStatus(order.id, "cooking")}>
                Cooking
              </button>

              <button onClick={() => updateStatus(order.id, "delivered")}>
                Delivered
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminOrders;
