// import './App.css';
import React, { useState } from "react";
import type { FC } from "react";

// type
type itemTypes = {
  title: string;
  addTime: string;
  endTime: string;
};

// コンポーネント
const item = (title: string, addTime: string, endTime: string) => {
  return (
    <li className="list">
      <span className="listTitle">{title}</span>
      <span className="listAddtime">{addTime}</span>
      <span className="listEndTime">{endTime}</span>
    </li>
  );
};

const App = () => {
  const [list, setList] = useState<itemTypes[]>([]);
  const [title, setTitle] = useState<string>("");

  const setTime = () => {
    const today = new Date();
    const time = `${today.getFullYear()}年 ${
      today.getMonth() + 1
    }月 ${today.getDate()}日 ${today.getHours()}時 ${today.getMinutes()}分`;
    return time;
  };

  const itemAddFunc = (newTitle: string) => {
    const addList: itemTypes = {
      title: newTitle,
      addTime: setTime(),
      endTime: "",
    };
    setList([...list, addList]);
    setTitle("")
  };

  const listsComp = list.map((item) => {
    return (
      <li key={item.title}>
        <span className="listTitle">{item.title}</span>
        <span className="listAddtime">{item.addTime}</span>
        <span className="listEndTime">{item.endTime}</span>
      </li>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>to do list</h1>
      </header>
      <main>
        <div>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button onClick={() => itemAddFunc(title)}>追加</button>
        </div>
        <ul>{listsComp}</ul>
      </main>
    </div>
  );
};

export default App;
