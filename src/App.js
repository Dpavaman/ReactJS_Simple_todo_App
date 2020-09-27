import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";


const LOCAL_STORAGE_KEY = 'todo-list-elements'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function clickComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }

  function removeItem(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To-do App</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} clickComplete={clickComplete} removeItem={removeItem} />
      </header>
    </div>
  );
}

export default App;
