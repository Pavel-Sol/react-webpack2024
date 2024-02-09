import { useState } from "react";
import css from "./App.module.scss";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={css.container}>
      <p>App111</p>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default App;
