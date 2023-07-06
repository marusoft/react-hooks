import { useState } from "react";
import employees from "../../data";
import "./style.css";

const UseStateWithArray = () => {
  const [staff, setStaff] = useState(employees);
  // console.log(staff)

  // function to delete individual item
  const removeItem = (id) => {
    // logic
    // console.log(id)
    const newEmployee = staff.filter((person) => person.id !== id);
    // console.log(newEmployee);
    setStaff(newEmployee);
  };
  // function to delete all item
  const clearAllItems = () => {
    setStaff([]);
  };

  return (
    <div>
      <h1>UseState Examples with arrays</h1>
      <div className="container">
        {staff.map((user) => {
          const { id, name, role, gender } = user;
          return (
            <div key={id} className="content">
              <h2>Name:{name}</h2>
              <span>Position:{role}</span>
              <h4>Gender: {gender}</h4>
              <button onClick={() => removeItem(id)} className="btn">
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={clearAllItems} className="clear-btn">
        Clear Items
      </button>
    </div>
  );
};
export default UseStateWithArray;
