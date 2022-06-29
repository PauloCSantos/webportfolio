import React from "react";
import "./courses.css";
import Card from "../card/Card";
import { courses, courses_start } from "./dataCourses";

function Courses() {
  return (
    <div className="courses" id="courses">
      <div className="courses-end">
        <div className="courses-end-text">Cursos Finalizados</div>
        <div className="courses-end-card">
          {courses.map((course) => {
            return (
              <Card
                key={course.title}
                title={course.title}
                text={course.text}
                url={course.imgpath}
                bio={course.bio}
                level={course.level}
                nota={course.nota}
                link={course.link}
                duracao={course.duracao}
              />
            );
          })}
        </div>
      </div>
      <div className="courses-start">
        <div className="courses-start-text">Cursos em Andamento</div>
        <div className="courses-start-card">

        {courses_start.map((course) => {
          return (
            <Card
            key={course.title}
            title={course.title}
            text={course.text}
            url={course.imgpath}
            bio={course.bio}
            level={course.level}
            nota={course.nota}
            link={course.link}
            duracao={course.duracao}
            />
            );
          })}
          </div>
      </div>
    </div>
  );
}

export default Courses;
