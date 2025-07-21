// What makes a web app different from a static website?
//  A web app is interactive. Of course, there's more to web apps
//   than capturing clicks, but it's important to start from the basics.
// This exercise gets you started with event handling,
// which is a basic concept not only in React but also in
//  JavaScript (which is again another pre-requisite before learning React).
// Using the native HTML <button> tag, capture the click event and alert the message, "Clicked!".
// Take note that capturing events such as clicks is done differently in React than it is in JavaScript.

import React from "react";
import Alert from "../Alert";

const CapturingUserClicks = () => {
  const handleClick = () => {
    alert("Clicked");
  };
  return (
    <div>
      <button className="bg-red-200" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default CapturingUserClicks;
