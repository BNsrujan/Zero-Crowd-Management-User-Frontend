import axios from "axios";
import { useEffect, useState } from "react";

interface JOCKS {
  id: string;
  name: string;
  jokes: string;
}

export default function Healthcheck() {
  const [jokes, setJokes] = useState<JOCKS[]>([]);

  useEffect(() => {
    axios
      .get("/api/healthcheck")
      .then((response) => {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Full Stack Jokes</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map(({ id, name, jokes }) => (
        <div key={id}>
          <h2>{name}</h2>
          <p>{jokes}</p>
        </div>
      ))}
    </div>
  );
}
