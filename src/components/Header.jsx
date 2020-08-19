import React from 'react';
import "../styles/components/Header.scss"
// import profilePic from "../assets/me2020-min.jpg"

const Header = ({ name, profession, avatar, children }) => {
  return (
    <>
      <div className="Header">
        <div className="Header__img">
          {/* <img src={avatar} /> */}
          {/* <img src={profilePic} /> */}
          <img src="https://img.icons8.com/dusk/64/000000/cat-profile.png" />
        </div>
        <div className="Header__info">
          <h1>{name}</h1>
          <h2>{profession}</h2>
          {children}
        </div>
      </div>
    </>
  );
};

export default Header;
