import React, { useState } from "react";

type Props = {};
type StateType = number;

const CounterHook: React.FC = (props: Props) => {
  const [count, setCount] = useState<StateType>(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const incrementCountTen = () => {
    setCount((prevCount) => prevCount + 10);
  };

  return (
    <div>
      <h1>5-6.hooks usestate 変数</h1>
      <h2>{count}</h2>
      <button onClick={incrementCount}>hook count +1</button>
      <button onClick={incrementCountTen}>hook count +10</button>
    </div>
  );
};

export default CounterHook;
