import React from "react";
import "./Lesson.module.css";

const LessonCard = ({ id, name, image, age }) => {
  return (
    <div>
      <li className="lesson">
        <img src={image} alt={name} key={id} />
        <article>
          <h5>Lesson Name: {name} </h5>
          <h5>Lesson Hour: {age} </h5>
        </article>
      </li>
    </div>
  );
};

export default LessonCard;
