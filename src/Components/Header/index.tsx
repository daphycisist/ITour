import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-white.png';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
        <a href="#" className="btn btn-white btn-animated">
          Discover Our Tours
        </a>
        {/* <Link to="#" className="btn btn-white">
          Discover Our Tours
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
