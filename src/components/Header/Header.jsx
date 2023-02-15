import React from "react";
import './Header.css';
import image from "../../assets/images/image.png"

const Header = () => {
  return (
    <div>
      <section className="header">
        <img src={image} alt="" />
        <h2>Lesson Reminder</h2>
        <img src={image} alt="" />
      </section>
    </div>
  );
};

export default Header;
