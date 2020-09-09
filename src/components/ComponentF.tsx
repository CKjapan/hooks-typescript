import React, { useContext } from "react";
import { UserContext } from "../App";

interface Props {}

const ComponentF = (props: Props) => {
  const user = useContext(UserContext);

  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
};

export default ComponentF;
