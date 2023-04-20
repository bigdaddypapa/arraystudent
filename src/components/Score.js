import React from "react";

function Score(props) {
  return (
    <div>
      {props.score.map((score, idx) => (
        <div>
          Date: {score.date}, Score: {score.score}
        </div>
      ))}
    </div>
  );
}

export default Score;

