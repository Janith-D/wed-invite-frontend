import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Navbar() {
  const navbarCollapseRef = useRef<HTMLDivElement>(null);

  const handleNavClick = () => {
    // Close the navbar menu by removing the 'show' class
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains('show')) {
      navbarCollapseRef.current.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={handleNavClick}>
          WedInvite
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={handleNavClick}>Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/location" onClick={handleNavClick}>Location</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-dark ms-lg-3" to="/rsvp" onClick={handleNavClick}>RSVP</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
