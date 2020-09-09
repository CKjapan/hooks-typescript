import React from "react";
import ComponentE from "./ComponentE";

interface Props {}

const ComponentC = (props: Props) => {
  return (
    <div>
      <ComponentE />
    </div>
  );
};

export default ComponentC;
