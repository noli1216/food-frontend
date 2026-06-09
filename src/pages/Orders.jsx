import { useEffect, useState } from "react";
import API from '../config/api';
import "./orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${API}/api/my-orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("ORDERS API RESPONSE:", data);

        // ✅ SAFE PARSING (handles all API shapes)
        const ordersData = Array.isArray(data)
          ? data
          : data.orders || data.data || [];

        setOrders(ordersData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load orders");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading orders...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="orders-container">
      <h1 className="orders-title">🧾 My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-header">
              <h3>Order #{order.id}</h3>
              <span className={`status ${order.status}`}>
                {order.status}
              </span>
            </div>

            <div className="order-items">
              {order.items && order.items.length > 0 ? (
                order.items.map((item) => (
                  <div className="item" key={item.id}>
                    🍽 {item.food_name} - ${item.price}
                  </div>
                ))
              ) : (
                <p>No items</p>
              )}
            </div>

            <div className="order-footer">
              <strong>Total: ${order.total_price}</strong>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;