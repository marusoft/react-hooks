import { useState } from "react";
import employees from "../../data";



const UseStateWithArray = () => {

  const [staff, setStaff] = useState(employees);
  console.log(staff)

  return (
    <div>
      <h1>UseState Examples with arrays</h1>
    </div>
  )
}
export default UseStateWithArray