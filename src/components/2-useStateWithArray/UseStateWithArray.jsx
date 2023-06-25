import { useState } from "react";
import employees from "../../data";
import "./style.css"


const UseStateWithArray = () => {

  const [staff, setStaff] = useState(employees);
  // console.log(staff)

  return (
    <div>
      <h1>UseState Examples with arrays</h1>
      <div className="container">
        {employees.map((user) => {
          return (
            <div key={user.id} className="content">
              <h2>Name:{user.name}</h2>
              <span>Position:{user.role}</span>
              <h4>Gender: {user.gender}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default UseStateWithArray