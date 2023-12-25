import React, { useState } from 'react';
import '../../Styles/NavBar.scss';
import LogoSVG from '../../Utils/LogoSVG';
import { NavBarProps } from '../../Interfaces/NavBarProps';
import { arrowDown2SVG, bellSVG, hamburgerMenuSVG, searchSVG } from '../../Utils/svg-icons';


const NavBar: React.FC<NavBarProps> = ({ userProfileData, toggleSideMenu, setToggleSideMenu }) => {
  return (
    <header className="navbar">
      <div className="hamburger-menu" onClick={() => { setToggleSideMenu(!toggleSideMenu) }}>{hamburgerMenuSVG}</div>
      <LogoSVG />
      <div className="search-bar">
        <input type="text" placeholder="Search for anything" />
        <button className="search-button">{searchSVG}</button>
      </div>
      <nav className="navbar-links">
        <a href="#" className="docs-link">Docs</a>
        <a href="#">
          <span className="notifications-icon">{bellSVG}</span>
        </a>
        <div className="user-profile">
          <img src={userProfileData?.avatarUrl} alt="User profile" />
          <span className="user-name">{userProfileData?.name}</span>
          <span className="dropdown-icon">{arrowDown2SVG}</span> {/* Replace with actual icon */}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
