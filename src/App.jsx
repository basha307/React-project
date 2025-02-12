import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";


import Contactus from "./Contactus";
import Order from "./Order";
import Aboutus from "./Aboutus";
import Milk from "./Milk";

import NotFound from "./NotFound";
import Login from "./Login";
import { logout } from "./Store"; // Make sure logout is exported from Store
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Cart from "./Cart";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalitems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      {/* Colorful Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "linear-gradient(to right, #FF7E5F, #FEB47B)" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home" style={{ fontFamily: "cursive", fontSize: "2.5rem", color: "#fff" }}>
            🍕 Foodie Paradise
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Home Link */}
              <li className="nav-item">
                <Link to="/home" className="nav-link" style={{ color: "#fff", fontWeight: "bold", fontSize: "1.3rem" }}>
                  🏠 Home
                </Link>
              </li>

              {/* Veg Link */}
              <li className="nav-item">
                <Link to="/veg" className="nav-link" style={{ color: "#fff", fontWeight: "bold", fontSize: "1.3rem" }}>
                  🥗 Veg
                </Link>
              </li>

              {/* Non-Veg Link */}
              <li className="nav-item">
                <Link to="/nonveg" className="nav-link" style={{ color: "#fff", fontWeight: "bold", fontSize: "1.3rem" }}>
                  🍗 Non-Veg
                </Link>
              </li>

              {/* Milk Link */}
              <li className="nav-item">
                <Link to="/milk" className="nav-link" style={{ color: "#fff", fontWeight: "bold", fontSize: "1.3rem" }}>
                  🥛 Milk
                </Link>
              </li>

              {/* Order Link */}
              <li className="nav-item">
                <Link to="/order" className="nav-link" style={{ color: "#fff", fontWeight: "bold", fontSize: "1.3rem" }}>
                  🛒 Order
                </Link>
              </li>

              {/* Contact Us Link */}
              <li className="nav-item">
                <Link to="/contactus" className="nav-link" style={{ color: "#fff", fontWeight: "bold", fontSize: "1.3rem" }}>
                  📞 Contact Us
                </Link>
              </li>

              {/* About Us Link */}
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link" style={{ color: "#fff", fontWeight: "bold", fontSize: "1.3rem" }}>
                  🧑‍💼 About Us
                </Link>
              </li>

              {/* Cart Link with Badge */}
              <li className="nav-item">
                <Link to="/cart" className="nav-link" style={{ color: "#fff", fontWeight: "bold", fontSize: "1.3rem" }}>
                  🛍️ Cart <span className="badge bg-warning">{totalitems}</span>
                </Link>
              </li>

              {/* Authenticated User Section */}
              {isAuthenticated ? (
                <div className="d-flex align-items-center">
                  <span className="text-white me-3" style={{ fontSize: "1.2rem" }}>Welcome, {user}!</span>
                  <button
                    className="btn btn-outline-light"
                    onClick={() => dispatch(logout())}
                    style={{ backgroundColor: "#FF6F61", color: "#fff" }}
                  >
                    🚪 Logout
                  </button>
                </div>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-link" style={{ color: "#fff", fontWeight: "bold", fontSize: "1.3rem" }}>
                    🔑 Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
