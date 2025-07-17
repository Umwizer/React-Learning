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
function App() {
  const [customer, setCustomer] = useState({
    name: "Ruth",
    contact: {
      address: {
        city: "San Francisco",
        zipCode: 9411,
      },
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      contact: {
        ...customer.contact,
        address: {
          ...customer.contact.address,
          zipCode: 94112,
        },
      },
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default App;

// import { useState } from "react";

// // function App() {
// //   const [drink, setDrink] = useState({
// //     title: "Americano",
// //     price: 5,
// //   });
// //   const handleClick = () => {
// //     setDrink({ ...drink, price: 6 });
// //   };
// //   return (
// //     <div>
// //       <button onClick={handleClick}>Click Me</button>
// //     </div>
// //   );
// // }
// // export default App;

//Updating Arrays
function Apps() {
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const handleClick = () => {
    //Add
    setTags([...tags, "exciting"]);
    //Remve
    setTags(tags.filter((tag) => tag !== "happy"));
    //Remove
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
//updating objects
function App1() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bugs2", fixed: false },
  ]);
}
