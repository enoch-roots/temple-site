import logo from "../assets/temple-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar blur-borders">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span className="navbar-text">Tuning Temple</span>
      </div>
    </nav>
  );
};

export default Navbar;
