import { useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState("Red");


  const changeSportWearColor = () => {
    setColor("Blue")
  }

  return (
    <div>
      <p>My favorite sport waer color is {color}</p>
      <button onClick={changeSportWearColor}>Chnage color</button>
    </div>
  );
};

export default ChangeColor;