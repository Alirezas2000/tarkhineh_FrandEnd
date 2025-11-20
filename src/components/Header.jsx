import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const goToMenu = () => {
    navigate('/menu');
  };

  const goToSearch = () => {
    navigate('/search');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="left_icons">
          

          <div className="user-dropdown-container" ref={menuRef}>
            <button 
              className="icon user-btn" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <img className="user_icon" src="/images/PNG/User.png" alt="User" />
            </button>


            {isOpen && (
              <div className="user-dropdown-menu">
                <ul>
                  <li><a href="#">ثبت نام</a></li>
                  <li><a href="#">پروفایل</a></li>
                  <li><a href="#">پیگیری سفارشات</a></li>
                  <li><a href="#">علاقه‌مندی‌ها</a></li>
                  <li><a href="#">آدرس‌های من</a></li>
                  <li><a href="#">خروج از حساب کاربری</a></li>
                </ul>
              </div>
            )}
          </div>


          <button className="icon">
            <img className="shop_icon" src="/images/PNG/shopping-cart.png" alt="Cart" />
            <span className="cart-count">0</span>
          </button>

     
          <button id="btn_search" className="icon" onClick={goToSearch}>
            <img className="search_icon" src="/images/PNG/search-normal.png" alt="Search" />
          </button>
        </div>

 
        <nav className="menu">
          <ul className="menu__link">
            <li className="menu__link--item"><a href="#">تماس با ما</a></li>
            <li className="menu__link--item"><a href="#">درباره ما</a></li>
            <li className="menu__link--item"><a href="#">اعطای نمایندگی</a></li>
            <li className="menu__link--item">
              <a href="#" className="menu-branch">شعبه‌ها</a>
              <ul className="sub__foods">
                <li><a href="#">اکباتان</a></li>
                <li><a href="#">چالوس</a></li>
                <li><a href="#">اقدسیه</a></li>
                <li><a href="#">ونک</a></li>
              </ul>
            </li>
            <li className="menu__link--item">
              <a href="#" className="menu-food" onClick={goToMenu}>منو</a>
              <ul className="sub__foods">
                <li><a href="#">غذای اصلی</a></li>
                <li><a href="#">پیش‌غذا</a></li>
                <li><a href="#">دسر</a></li>
                <li><a href="#">نوشیدنی</a></li>
              </ul>
            </li>
            <li className="menu__link--item">
              <a href="/" className="active">صفحه اصلی</a>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <img src="/images/SVG/Logo.svg" alt="Logo" className="logo-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;