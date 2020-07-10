import React from "react";

function Button(props) {
  const { buttonState } = props;
  return (
    <>
      <button onClick={() => props.handleButton()}>
        {" "}
        {buttonState ? "turn off" : "turn on"}
      </button>
    </>
  );
}
export default Button;
