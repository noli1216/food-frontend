import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <span className="hero-tag">🇪🇹 Authentic Ethiopian Catering</span>

          <h1>Delicious Ethiopian Food Made Fresh 🍽️</h1>

          <p>
            We prepare traditional Ethiopian meals for weddings, birthdays,
            office lunches, church events, and family gatherings with authentic
            taste and fresh ingredients.
          </p>

          <div className="hero-buttons">
            <Link to="/menu">
              <button className="primary-btn">🍽 View Menu</button>
            </Link>

            <Link to="/orders">
              <button className="secondary-btn">📦 My Orders</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <h3>🍛 Authentic Taste</h3>
          <p>Traditional Ethiopian recipes cooked the real way.</p>
        </div>

        <div className="feature-card">
          <h3>🚚 Fast Catering Service</h3>
          <p>We deliver fresh food for any event on time.</p>
        </div>

        <div className="feature-card">
          <h3>👨‍🍳 Expert Chefs</h3>
          <p>Experienced chefs who specialize in Ethiopian cuisine.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="about-content">
          <h2>About Mesi Catering</h2>

          <p>
            Mesi Catering is your trusted Ethiopian food service in Dallas. We
            bring traditional flavors like Doro Wat, Tibs, Kitfo, Injera, and
            vegetarian dishes straight to your table.
          </p>

          <p>
            Whether it’s a small family dinner or a large event, we guarantee
            quality, freshness, and satisfaction.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <h2>Ready to Order?</h2>
        <p>Explore our menu and enjoy authentic Ethiopian food today.</p>

        <Link to="/menu">
          <button className="primary-btn">Start Ordering</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
