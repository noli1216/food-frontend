// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/header/Header";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Admin from "./pages/Admin";
// import AddMenu from "./pages/AddMenu";
// import Users from "./pages/Users";
// import Orders from "./pages/Orders";
// import Protected from "./protected";
// import Menu from "./pages/Menu";
// import Footer from "./components/footer/Footer";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         {/* <Route path="/home" element={<Home />} /> */}
//         <Route path="/Register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<Protected><Home /></Protected>} />
//         <Route path="/admin" element={<Protected><Admin /></Protected>} />
//         <Route path="/addmenu" element={<Protected><AddMenu /></Protected>} />
//         <Route path="/users" element={<Protected><Users /></Protected>} />
//         <Route path="/orders" element={<Protected><Orders /></Protected>} />
//         <Route path="/menu" element={<Protected><Menu /></Protected>} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AddMenu from "./pages/AddMenu";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminMenu from "./pages/AdminMenu";
import EditMenu from "./pages/EditMenu";

import Protected from "./Protected";
import Checkout from "./pages/Checkout";
import AdminOrders from "./pages/AdminOrders";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* Public */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Protected */}
        <Route
          path="/menu"
          element={
            <Protected>
              <Menu />
            </Protected>
          }
        />
        <Route
          path="/home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />

        <Route
          path="/admin"
          element={
            <Protected>
              <Admin />
            </Protected>
          }
        />

        <Route
          path="/adminmenu"
          element={
            <Protected>
              <AdminMenu />
            </Protected>
          }
        />

        <Route
          path="/addmenu"
          element={
            <Protected>
              <AddMenu />
            </Protected>
          }
        />

        <Route
          path="/editmenu/:id"
          element={
            <Protected>
              <EditMenu />
            </Protected>
          }
        />

        <Route
          path="/users"
          element={
            <Protected>
              <Users />
            </Protected>
          }
        />

        <Route
          path="/orders"
          element={
            <Protected>
              <Orders />
            </Protected>
          }
        />

        <Route
          path="/cart"
          element={
            <Protected>
              <Cart />
            </Protected>
          }
        />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin-orders" element={<AdminOrders />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
