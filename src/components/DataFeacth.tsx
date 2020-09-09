import React, { useState, useEffect, useCallback } from "react";

interface Props {}
type StateTypeLoad = boolean;
type StateTypeName = { first: string; last: string };

const DataFeacth = (props: Props) => {
  const [user, setUser] = useState<StateTypeName>({ first: "", last: "" });
  const [loading, setLoading] = useState<StateTypeLoad>(true);

  const feacthData = async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    setUser({
      first: data.results[0].name.first,
      last: data.results[0].name.last,
    });
    setLoading(false);
  };

  const Func = useCallback(feacthData, []);

  useEffect(() => {
    Func();
  }, [Func]);

  return (
    <div>
      <h1>10. feacth1</h1>
      {loading ? (
        <h1>···</h1>
      ) : (
        <h1>
          {user.first}
          {user.last}
        </h1>
      )}
    </div>
  );
};

export default DataFeacth;
