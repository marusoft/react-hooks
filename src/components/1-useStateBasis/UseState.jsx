import { useState } from "react";

/**
 * useState()
 * takes two parameter
 * 1. current value
 * 2. function to update the current value
 * useState(<current value>, function to update the current value)
 */
const UseState = () => {
  // console.log(useState("hello muhammed"));
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <h1>UseState Basic Examples</h1>
      <p>My current score is: {score}</p>
      <button onClick={increaseScore}>Click</button>
    </div>
  );
};
export default UseState;
