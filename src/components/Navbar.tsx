import logo from "../assets/temple-logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={handleLogoClick}>
          <img
            src={logo}
            alt="Tuning Temple Logo"
            className="navbar-logo-img"
          />
          <span className="navbar-text">Tuning Temple</span>
        </div>

        <div className="navbar-menu">
          <button
            className={`navbar-link book-now-nav ${location.pathname === "/booking" ? "active" : ""}`}
            onClick={handleBookingClick}
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
