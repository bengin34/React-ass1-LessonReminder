import React from "react";
import data from "../helper/data.jsx";

const LessonCard = ({ id, name, image, age }) => {
  return (
    <div>
      <img src={image} alt={name} key={id} />
      <h5>Lesson Name: {name} </h5>
      <h5>Lesson Hour: {age} </h5>
    </div>
  );
};

export default LessonCard;
