// src/AddTodo.tsx
import React, { FC, useState } from 'react';

type AddTodoProps = {
    onAddTodo: (newTodo: string) => void;
}

const AddTodo: FC<AddTodoProps> = ({ onAddTodo }) => {
    const [newTodo, setNewTodo] = useState<string>('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            onAddTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <div className="add-todo">
            <input
                type="text"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default AddTodo;
