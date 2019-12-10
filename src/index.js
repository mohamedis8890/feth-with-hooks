import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
 const [data, setData] = useState({ hits: [] });
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
