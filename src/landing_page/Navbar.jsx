import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useEffect } from "react";

const Navbar = () => {
  const { isAuthenticated, username, logout, login } = useContext(AuthContext);

  useEffect(()=>{

  }, [login])
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/src/assets/logo.svg"
            alt="logo"
            style={{ width: "100%", maxWidth: "140px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <span className="nav-link active">Hello, {username}</span>
                </li>
                <li className="nav-item">
                <a
                    href="https://zerodha-dashboard-9t4gk5n9a-saniyas-projects-8de141ba.vercel.app" // Full URL to Dashboard
                    className="nav-link active"
                  >
                    Dashboard
                  </a>
                </li>
                
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    style={{ textDecoration: "none" }}
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link active">
                    SignUp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link active">
                    Login
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link active">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link active">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/support" className="nav-link active">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
