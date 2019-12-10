import React, { useState } from "react";
import ReactDOM from "react-dom";
import useFetch from "./useFetch";

import "./styles.css";

function App() {
  const url = "https://hn.algolia.com/api/v1/search?query=";
  const [query, setQuery] = useState("redux");
  const [{ data, isLoading }, fetch] = useFetch(url + query, { hits: [] });

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          fetch(url + query);
        }}
      >
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
