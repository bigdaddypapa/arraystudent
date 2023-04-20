import React from "react";
import Score from "./Score";

function Student(props) {
  return (
    <div>
      <h1>{props.student.name}</h1>
      <p>{props.student.bio}</p>
      <div>
        {props.student.scores.map((scores, idx) => (
          <Score key={idx} score={[scores]} />
        ))}
      </div>
    </div>
  );
}

export default Student;
