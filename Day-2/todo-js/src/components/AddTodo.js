import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');

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
