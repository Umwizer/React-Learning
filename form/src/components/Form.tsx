import { useState } from "react";

function Form() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder="First Name"
        value={FirstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={LastName}
        onChange={(e) => setLastName(e.target.value)}
        className="form-control"
      />
      <button className="btn btn-danger">Greet Me</button>
    </div>
  );
}
export default Form;
