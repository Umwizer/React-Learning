import { useState } from "react";

function Formss() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Hi ${FirstName} ${LastName}`);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          className="form-control"
          type="text"
          placeholder="First Name"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          placeholder="Last Name"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          className="form-control"
        />
        <br></br>
        <button className="btn btn-danger">Greet Me</button>
      </form>
    </div>
  );
}
export default Formss;
