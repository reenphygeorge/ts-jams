import React, { FC } from 'react';

type TodoListProps = {
    todos: string[];
    onRemoveTodo: (index: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onRemoveTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => onRemoveTodo(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
