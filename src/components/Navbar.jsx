import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-main-dark fixed-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="https://nufouth.com/assets/media/svg/icons/AR2%20-%20W.png" width="150px" alt="نفوذ التطوير" />
        </Link>

        {/* Toggler / Burger button */}
        <button 
          className="navbar-toggler custom-toggler" 
          type="button" 
          onClick={toggleMenu}
        >
          <i className="fas fa-bars text-white fs-3"></i>
        </button>

        {/* Collapsible wrapper */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav w-100 align-items-center">
            {/* Regular nav links */}
            <li className="nav-item">
              <Link 
                className={`nav-link fs-7 text-white ${isActive('/') ? 'active' : ''}`} 
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                عن الشركة
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link fs-7 text-white ${isActive('/') ? 'active' : ''}`} 
                to="/#work-areas"
                onClick={() => setIsMenuOpen(false)}
              >
                مجالات العمل
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link fs-7 text-white ${isActive('/vacancy-map') ? 'active' : ''}`} 
                to="/vacancy-map"
                onClick={() => setIsMenuOpen(false)}
              >
                خريطة الشواغر
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link fs-7 text-white ${isActive('/vacancy-table') ? 'active' : ''}`} 
                to="/vacancy-table"
                onClick={() => setIsMenuOpen(false)}
              >
                جدول الشواغر
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link fs-7 text-white ${isActive('/blog') ? 'active' : ''}`} 
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
              >
                المدونة
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link fs-7 text-white ${isActive('/contact') ? 'active' : ''}`} 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>
            </li>

            {/* Language dropdown */}
            <li className="nav-item dropdown ms-sm-auto">
              <a 
                className="nav-link dropdown-toggle text-white" 
                href="#" 
                role="button" 
                onClick={toggleLanguage}
                aria-expanded={isLanguageOpen}
              >
                <i className="fa-solid fa-globe mx-1"></i>
              </a>
              <ul className={`dropdown-menu dropdown-menu-start py-0 rounded-0 ${isLanguageOpen ? 'show' : ''}`}>
                <li>
                  <a className="dropdown-item py-3" href="#">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png" 
                      width="20px" 
                      alt="Saudi Arabia flag" 
                      className="me-2" 
                    />
                    <span>العربية</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item py-3" href="#">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" 
                      width="20px" 
                      alt="US flag" 
                      className="me-2" 
                    />
                    <span>English</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

