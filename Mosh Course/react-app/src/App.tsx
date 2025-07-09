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

import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  return (
    <div>
      <Alert>"Hello World" </Alert>
      <Button>My Button</Button>
    </div>
  );
}
export default App;
