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
  },[]);
  // Component didMount

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div>Дание через api взяти с этого сайта </div>
          <a
            className="aaa"
            target="_blank"
            href="https://jsonplaceholder.typicode.com/posts"
          >
            https://jsonplaceholder.typicode.com/posts
          </a>
        </p>
        <ul>
          {dataeye.map((item, index) => (
            <li className="myli" key={index}>
              <p className="userId">UserId={item.userId}</p>
              <p className="id">id={item.id}</p>
              <p className="title">title=[ {item.title} ]</p>
              <p className="body">body=[ {item.body} ]</p>
            </li>
          ))}
        </ul>
        <p>heloo</p>
      </header>
    </div>
  );
}

export default App;
