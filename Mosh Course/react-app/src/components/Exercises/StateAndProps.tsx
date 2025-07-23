// So you're comfortable working with props, congratulations!
// Using props allows us to pass values or functions down to a child component.

// State is another integral concept we must learn in React.
//  It allows us to store values, and React automatically updates our UI when the values change.

// That's one of the many beautiful things with React.
// We don't need to manually handle these things -
// React does the UI re-rendering for us when a value changes.
//  But we must know how to use the state for this purpose.

// This exercise is simple, and is a very common React tutorial out there.
//  Use the useState React hook to track how many times a button is clicked, and display the number.

// The number must increment each time the button is clicked:
import React, { useState } from "react";

const StateAndProps = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold mb-2">You clciked{count} times</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg:blue-600 transition"
      >
        Click Me
      </button>
    </div>
  );
};

export default StateAndProps;
