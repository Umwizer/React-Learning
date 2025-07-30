import { useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);
  //side effect
  if (ref.current) ref.current.focus();
  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}
export default App;
