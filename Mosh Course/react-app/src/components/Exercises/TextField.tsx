// the text state variable holds a string.
//  When you type, handleChange reads the
//  latest input value from the browser input DOM element
// , and calls setText to update the state.
// This allows you to display the current text below.

import { useState } from "react";

function TextState() {
  const [text, setText] = useState("hello");
  function handleChange(e: any) {
    setText(e.target.value);
  }
  return (
    <>
      <input type={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}
export default TextState;
