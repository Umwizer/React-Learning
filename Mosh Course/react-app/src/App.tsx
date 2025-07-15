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

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// function App() {
//   const [person, setPerson] = useState({
//     firtName: "",
//     lastName: "",
//     contact: {
//       address: {
//         street: "",
//       },
//     },
//   });
//   const [isLoading, setLoading] = useState(false);
//   return <div></div>;
// }
// export default App;

import Message from "./Message";

function App() {
  return (
    <div>
      <Message />
      <Message />
      <Message />
    </div>
  );
}
export default App;
