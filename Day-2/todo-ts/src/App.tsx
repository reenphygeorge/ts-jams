import React, { FC, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './styles.css';

const TodoApp: FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  const handleRemoveTodo = (index: number) => {
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
