import { useState } from "react";

const UseStateWithObject = () => {
  const [person, setPerson] = useState({
    name: "olumide",
    age: 15,
    level: "200l",
  });

  const displayPerson = () => {
    setPerson({
      ...person,
      name: "Kehinde"
    });
  };

  // const mySchool = {
  //   course: "modern physics",
  //   department: "physics",
  //   faculty: "science",
  // };
  // mySchool.department = "chemistry";
  // mySchool.course = "Quantum Mechanics"
  // console.log(mySchool);

  // const { name, age, level } = person;

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      <h2>Name: {person.name}</h2>
      <h3>Age: {person.age}</h3>
      <h3>Level: {person.level}</h3>
      <button
        style={{
          backgroundColor: "orange",
          color: "#fff",
          padding: "8px",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        onClick={displayPerson}
      >
        Change Property
      </button>
    </div>
  );
};
export default UseStateWithObject;
