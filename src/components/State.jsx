import { useState } from "react";
const State = () => {
  const [value, setValue] = useState(0);

  const Increase = () => {
    setValue(value + 1);
  };
  const Decrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <div>
      <h1>UseState</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <p>
        Value:<span>{value}</span>
      </p>
    </div>
  );
};
export default State;
