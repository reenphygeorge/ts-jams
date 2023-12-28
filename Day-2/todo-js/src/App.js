import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './styles.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default TodoApp;
