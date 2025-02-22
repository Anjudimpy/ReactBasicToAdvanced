import React from "react";
import useFetch from "./useFetch";
import "./styles.css";

export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  const { data, loading, error, getJoke } = useFetch(url);

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {loading ? <p>Loading...</p> : error ? <p>Something went wrong…</p> : <h2>{data?.joke}</h2>}
      <button className="btn" onClick={getJoke}>
        New Joke
      </button>
    </div>
  );
}
