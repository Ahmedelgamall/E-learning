import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './Navbar.scss'; 
import CartDropdown from '../CartDropdown/CartDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/languageSlice';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../redux/store'; // Import RootState type

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.language.language); // Typing state with RootState
  const { t } = useTranslation();

  // Handle scroll to change navbar style
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 50);
  };

  // Handle language change and update Redux state
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    dispatch(setLanguage(selectedLanguage));
    console.log("Language selected:", selectedLanguage);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <span>e</span> Study
        </a>

        {/* Bootstrap Toggler for small screens */}
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

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* 'ms-auto' aligns the menu to the right */}
            <li className="nav-item">
              <a className="nav-link active" href="/">{t('navbar.home')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features"> {t('navbar.features')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services"> {t('navbar.services')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/courses"> {t('navbar.courses')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#teachers"> {t('navbar.teachers')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing"> {t('navbar.Pricing')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact"> {t('navbar.Contact')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faqs"> {t('navbar.FAQs')}</a>
            </li>
            <li className="nav-item">
              <CartDropdown />
            </li>
            <li className="nav-item">
              <select 
                className="form-select language-select-custom" 
                value={currentLanguage} 
                onChange={handleLanguageChange}
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="ger">Deutsch</option>
              </select>
            </li>
            <li className="nav-item">
              <a href="/login">
                <button>Login</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
