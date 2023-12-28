import React from 'react';

const TodoList = ({ todos, onRemoveTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <p>{todo}</p>
                    <button onClick={() => onRemoveTodo(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
