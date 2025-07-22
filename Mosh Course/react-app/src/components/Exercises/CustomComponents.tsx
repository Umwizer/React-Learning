// In the previous exercise, we used the HTML <button> tag.
// But much of the power that React provides to us developers
// is being able to create our own components and reuse them.
// You'll be creating more complicated custom components than
// a simple button in the near future, but we all gotta start somewhere.
// In this exercise, build your own Button component
//  and render it three times. On user click, it should alert which button was clicked:
// The custom component should accept an onClick prop.
// On render, it should render the children betwen the button.
//  This is the text you want for the button.
// Think of it like the HTML <button> tag.
// Whatever text you place between the opening
//  and closing tag is rendered between the button
//   when you inspect the element in your browser developer console.
// On user click, it should alert which button was clicked.
import React from "react";

interface Props {
  id: string;
  color: string;
  onClick: () => void;
}

const CustomComponents: React.FC<Props> = ({ id, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 m-2 rounded text-white transition"
      style={{ backgroundColor: color }}
    >
      Button {id}
    </button>
  );
};

export default CustomComponents;
