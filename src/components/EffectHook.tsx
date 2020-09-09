import React, { useState, useEffect } from "react";

type Props = {};
type StateType = string | number;

const EffectHook: React.FC = (props: Props) => {
  const [count, setCount] = useState<StateType>(0);
  const [name, setName] = useState<StateType>("");

  useEffect(() => {
    document.title = `クリック数:${count}回`;
    // console.log("render");
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => +prevCount + 1);
  };

  return (
    <div>
      <h1>8. hooks useeffect</h1>
      <p>クリック数:{count}回</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={incrementCount}>count +</button>
    </div>
  );
};

export default EffectHook;
