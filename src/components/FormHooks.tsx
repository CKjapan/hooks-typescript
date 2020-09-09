import React, { useState } from "react";

type Props = {};
type StateType = { firstname: string; lastname: string };

const FormHooks: React.FC = (props: Props) => {
  const [name, setName] = useState<StateType>({ firstname: "", lastname: "" });

  return (
    <div>
      <h1>6.hooks usestate オブジェクト</h1>
      <p>firstname:- {name.firstname}</p>
      <p>lastname:- {name.lastname}</p>
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
      </form>
    </div>
  );
};

export default FormHooks;
