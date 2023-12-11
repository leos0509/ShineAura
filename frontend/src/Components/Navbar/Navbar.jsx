// Navbar.jsx
import React, { useState } from 'react';
import logo from '../Assets/Media/Logo.svg';
import './Navbar.css';
import ButtonCollectionButton from '../Button/Button_collection.jsx'; 
import Button2 from '../Button/Button_2.jsx';

const Navbar = () => {
  const [showAllParent, setShowAllParent] = useState(false);

  const handleSButtonClick = () => {
    setShowAllParent(!showAllParent);
  };

  return (
    <div className="navigation">
      <div className="nav-logo">
        <img className="nav-logo-icon" src={logo} alt="logo" />
      </div>
      <div className="nav-parent">
        <div className=" nav-button Dropdown">
          <ButtonCollectionButton />
        </div>
        <div className="nav-button">
          <Button2 buttonText="HOT DEAL" />
        </div>
        <div className="nav-button">
        <Button2 buttonText="BEST SELLER" />
        </div>
        <div className="nav-button">
        <Button2 buttonText="ABOUT US" />
        </div>
        <div className="nav-button">
        <Button2 buttonText="POLICY" />
        </div>
        
      </div>
      <div className="nav-icon">
          <div className="icon-button">
          <i className=" bi bi-bag"></i>
          </div>
          <div className="icon-button">
          <i className=" bi bi-people"></i>
          </div>
          <div className="icon-button">
          <i className=" bi bi-search"></i>
          </div>
        </div>
    </div>
  );
};

export default Navbar;

