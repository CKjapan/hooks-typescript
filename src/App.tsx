import React, { createContext } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterHook from "./components/CounterHook";
import FormHooks from "./components/FormHooks";
import ItemHook from "./components/ItemHook";
import EffectHook from "./components/EffectHook";
import MouseEventEffect from "./components/MouseEventEffect";
import DataFeacth from "./components/DataFeacth";
import DataFeacthById from "./components/DataFeacthById";
import ComponentC from "./components/ComponentC";

type StateType = {
  name?: string;
  age?: string;
};

export const UserContext = createContext<StateType>({});

function App() {
  const user = { name: "yamada", age: "32" };

  return (
    <div className="App">
      <Counter />
      <CounterHook />
      <FormHooks />
      <ItemHook />
      <EffectHook />
      <MouseEventEffect />
      <DataFeacth />
      <DataFeacthById />
      <UserContext.Provider value={user}>
        <ComponentC />
      </UserContext.Provider>
    </div>
  );
}

export default App;
