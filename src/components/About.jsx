import React from 'react';
import "../styles/components/About.scss"

const About = ({ email, address, website }) => {
  return (
    <>
      <div className="About">
        <span>{email}</span>
        <span>{address}</span>
        <span>{website}</span>
      </div>
    </>
  );
};

export default About;
