// You can declare more than one state variable
//  in the same component. Each state variable is completely independent.

import { useState } from "react";

function Forms() {
  const [name, setName] = useState("Ruth");
  const [age, setAge] = useState(21);
  return (
    <>
      <input type="" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Increment age </button>
      <p>
        Hello,{name}. You are {age}
      </p>
    </>
  );
}
export default Forms;
