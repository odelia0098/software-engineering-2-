import React, { useState } from "react";
import Req from "./RequestCards";
import TeacherPanel from "./TeacherPanel";

const requests = [
  {
    key: "1",
    image: require("../Images/math1.png"),
    student: "Ali karimian",
    course: "Mathematics",
    grade: "Second grade",
    school: "Allame Helli",

    gpa: "19.8",
    email: "Ali@gmail.com",
    city: "Tehran"
  },

  {
    key: "2",
    image: require("../Images/math2.png"),
    student: "Ziba Ara",
    course: "Mathematics",
    grade: "Second grade",
    school: "Imam Hossein",

    gpa: "19.98",
    email: "Ziba@gmail.com",
    city: "Shiraz"
  }
];
const StuRequest = props => {
  const RenderCards = req => {
    return (
      <Req
        key={req.id}
        image={req.image}
        student={req.student}
        course={req.course}
        grade={req.grade}
        school={req.school}
        gpa={req.gpa}
        email={req.email}
        city={req.city}
      />
    );
  };
  return (
    <div>
      <TeacherPanel />
      <div id="req_text">
        <span>Requests</span>
      </div>
      {requests.map(req => {
        return (
          <RenderCards
            key={req.id}
            image={req.image}
            student={req.student}
            course={req.course}
            grade={req.grade}
            school={req.school}
            gpa={req.gpa}
            email={req.email}
            city={req.city}
          />
        );
      })}
    </div>
  );
};

export default StuRequest;
