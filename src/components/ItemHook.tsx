import React, { useState } from "react";

type Props = {};
type StateType = { id: number; value: number }[];

const ItemHook: React.FC = (props: Props) => {
  const [items, setItems] = useState<StateType>([]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 11) },
    ]);
  };
  const clearItem = () => {
    setItems([]);
  };

  return (
    <div>
      <h1>6.hooks usestate 配列（の中にオブジェクト）</h1>
      <button onClick={addItem}>add Item</button>
      <button onClick={clearItem}>clear Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemHook;
