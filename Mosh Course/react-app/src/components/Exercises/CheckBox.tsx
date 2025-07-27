// the liked state variable holds a boolean.
// When you click the input, setLiked updates the liked state variable
// with whether the browser checkbox input is checked.
// The liked variable is used to render the text below the checkbox.

import { useState } from "react";

function MyCheckBox() {
  const [input, setInput] = useState(true);
  function handlingInput(e: any) {
    setInput(e.target.checked);
  }
  return (
    <>
      <label>
        <input type="checkbox" checked={input} onChange={handlingInput} />I
        liked This
      </label>
      <p>You {input ? "liked" : "did not like This"} </p>
    </>
  );
}
export default MyCheckBox;
