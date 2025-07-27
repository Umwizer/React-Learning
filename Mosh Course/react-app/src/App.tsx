// //updating objects
// import { useState } from "react";
// import produce from "immer";

// function App1() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug1", fixed: false },
//     { id: 2, title: "Bugs2", fixed: false },
//   ]);
//   const handleClick = () => {
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };
//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? "Fixed" : "New"}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }
// export default App1;

import CapturingUserClicks from "./components/Exercises/CapturingUserClicks";
import HelloWorld from "./components/Exercises/HelloWorld";
import Form from "./components/form";
import AListAndRendering from "./components/Exercises/AListAndRendering";
import CustomComponents from "./components/Exercises/CustomComponents";
import { useState } from "react";
import StateAndProps from "./components/Exercises/StateAndProps";
import Counter from "./components/Exercises/Counter";
function App() {
  const [arr, setArr] = useState({
    "1": "red",
    "2": "yellow",
    "3": "green",
  });

  const handleClick = (id: string) => {
    alert(`Clicked Button ${id}`);
  };

  return (
    <div className="p-4">
      {/* {<Form />} */}
      {/*<HelloWorld /> */}
      {/* <CapturingUserClicks /> */}
      {Object.entries(arr).map(([id, color]) => (
        <CustomComponents
          key={id}
          id={id}
          color={color}
          onClick={() => handleClick(id)}
        />
      ))}
      <StateAndProps />
      <AListAndRendering />
      <Counter />
    </div>
  );
}
export default App;
