// Exercise 1: Hello World!
// Every programming language starter tutorial
// teaches you how to output "Hello, World!" using the language.
// But this exercise is not just for tradition.
// This will asses if you actually know HTML,
// which is one of the many prerequisites before learning React.
// Start by rendering a square with a background color.
//  Inside the square, render "Hello, World!".
import React from "react";

const HelloWorld = () => {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className="bg-yellow-400 w-300 h-140 flex items-center justify-center">
        <p className="text-gray-800 text-lg font-medium">Hello, World!</p>
      </div>
    </div>
  );
};

export default HelloWorld;
