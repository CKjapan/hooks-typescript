import React, { useState, useEffect } from "react";

interface Props {}
type StateType = number;

const MouseEventEffect = (props: Props) => {
  const [x, setX] = useState<StateType>(0);
  const [y, setY] = useState<StateType>(0);

  const getMousePosition = (e: MouseEvent) => {
    // console.log("getMousePosition");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    // console.log("useEffect");
    window.addEventListener("mousemove", getMousePosition);
    return () => {
      window.removeEventListener("mousemove", getMousePosition);
    };
  }, []);

  return (
    <div>
      <h1>9. hooks useeffect イベント登録</h1>
      <ul>
        <li>x座標:{x}</li>
        <li>y座標:{y}</li>
      </ul>
    </div>
  );
};

export default MouseEventEffect;
