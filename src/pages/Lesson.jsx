import React from "react";
import LessonCard from "../components/LessonCard/LessonCard"
import {data} from "../helper/data";

const Lesson = () => {
  return (
    <div>
    {data.map(({name,image,age,id}) => (
      <LessonCard name={name} age={age} image={image} id={id} /> 
      ))}
    </div>
  );
};

export default Lesson;
