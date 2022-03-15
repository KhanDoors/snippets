import "./App.css";
import Test from "./components/trying/Test";
import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(books);
  }, []);

  console.log(state);

  const books = [
    { id: 111, title: "title 1", description: "some description" },
    { id: 22, title: "title 2", description: "some description" },
    { id: 333, title: "title 3", description: "some description" },
  ];
  return (
    <div className="App">
      <h1>Hello World</h1>

      <Test state={state} />
    </div>
  );
}

export default App;
