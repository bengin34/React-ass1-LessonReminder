import React from "react";


const LessonCard = ({ id, name, image, age }) => {
  return (
    <div className="lesson-card">
    <ul>
        <li className="lesson">
        <img style={{width:"100px", height:"100px" }} src={image} alt={name} key={id} />
        <article>
        <h5>Lesson Name: {name} </h5>
        <h5>Lesson Hour: {age} </h5>
        </article>
        </li>
      </ul>
    </div>
  );
};

export default LessonCard;
