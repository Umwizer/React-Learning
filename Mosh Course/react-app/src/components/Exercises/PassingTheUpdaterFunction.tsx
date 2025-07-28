import { useState } from "react";

function Counter1() {
  const [age1, setAge1] = useState(42);
  function increment() {
    setAge1((a) => a + 1);
  }
}
export default Counter1;
