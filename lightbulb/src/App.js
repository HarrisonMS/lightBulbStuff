import React, { useState } from "react";
import Button from "./components/Button.js";
import LightBulb from "./components/lightbulb";

function App() {
  const [lightOn, setLightOn] = useState(true);
  const [buttonState, setButtonState] = useState(false);

  const handleButton = () => {
    setButtonState(!buttonState);
    setLightOn(!lightOn);
  };
  const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
  const yellow =
    "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

  return (
    <div className="App">
      <LightBulb
        lightOn={lightOn}
        setLightOn={setLightOn}
        yellow={yellow}
        white={white}
      />
      <Button handleButton={handleButton} />
    </div>
  );
}

export default App;
