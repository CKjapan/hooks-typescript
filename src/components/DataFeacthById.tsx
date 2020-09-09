import React, { useState, useEffect } from "react";

interface Props {}
type StateTypeId = number | string;
type StateTypePost = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};

const DataFeacthById = (props: Props) => {
  const [post, setPost] = useState<StateTypePost>({
    userId: 0,
    id: 0,
    title: "",
    body: "",
  });
  const [id, setId] = useState<StateTypeId>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const item = await response.json();
      console.log(item);
      setPost(item);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>10. fetch2</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {loading ? <h1>···</h1> : <h1>{post.title}</h1>}
    </div>
  );
};

export default DataFeacthById;
