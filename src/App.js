import "./App.css";

import React from "react";
import { useState, useEffect } from "react";

function App() {
  // Зделаем пару useState для отображения даных
  const [dataeye, Setdataeye] = useState([]);

  const [checking, Setchecking] = useState();

  // Зделать через async
  const Url = fetch("https://jsonplaceholder.typicode.com/posts");
  // (async function self() {
  //   let responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  // })();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        Setdataeye(data);
        return data;
      });
  }, []);
  // Component didMount

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>Дание через api взяти с этого сайта </div>
          <a
            className="aaa"
            target="_blank"
            href="https://jsonplaceholder.typicode.com/posts"
          >
            https://jsonplaceholder.typicode.com/posts
          </a>
        </div>
        <ul>
          {dataeye.map((item, index) => (
            <li className="myli" key={index}>
              <div className="userId">UserId={item.userId}</div>
              <div className="id">id={item.id}</div>
              <div className="title">title=[ {item.title} ]</div>
              <div className="body">body=[ {item.body} ]</div>
            </li>
          ))}
        </ul>
        <p>heloo</p>
      </header>
    </div>
  );
}

export default App;
