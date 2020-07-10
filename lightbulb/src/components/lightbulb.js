import React from "react";

function LightBulb(props) {
  return (
    <div>
      {props.lightOn === false ? (
        <img src={props.white} />
      ) : (
        <img src={props.yellow} />
      )}
    </div>
  );
}
export default LightBulb;
