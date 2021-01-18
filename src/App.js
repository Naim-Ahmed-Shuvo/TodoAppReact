// import logo from './logo.svg';
import React,{ useState } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       
       <Form todos={todos} setTodo={setTodo} inputText={inputText} setInputText={setInputText}/>
       <TodoList inputText={inputText} todos={todos} setTodo={setTodo}/>
    </div>
  );
}

export default App;
