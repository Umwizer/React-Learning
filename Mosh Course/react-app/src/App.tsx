// import ListGroup from "./components/ListGroup";
// function App() {
//   let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }
// export default App;

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + "" + lastName;
  return <div>{fullName}</div>;
}
export default App;
