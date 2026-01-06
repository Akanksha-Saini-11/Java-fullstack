import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main" >
      <h1 className="count">Count: {count}</h1>
      <div className="inner">
        <button className="btn" onClick={() => setCount(count + 1)}>+ Increase</button>
        <button  className="btn" onClick={() => setCount(count - 1)}>- Decrease</button>
        <button className="btn" onClick={() => setCount(0)}>O Reset</button>
      </div>
    </div>
  );
}

export default App;