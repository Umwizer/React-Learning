// To get comfortable with React, you must learn declarative programming.
// React is declarative. So you need to think in "declarative programming"
// whenever you work with React, and this exercise is perfect for that.
// This is the "opposite" of imperative programming which is the paradigm used in Vanilla JavaScript.
// In this exercise, instead of manually and "imperatively" coding the
//  render of each item in a list, use the map function to "declare" how React should render the list.
// Given an array:
// ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

import React from "react";

const AListAndRendering = () => {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <div>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
};

export default AListAndRendering;
