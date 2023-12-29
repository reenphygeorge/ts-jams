import { connect, Schema, model } from 'mongoose';

type Todo = {
    items: string;
    createdAt: Date;
}

// Define the Todo schema
const TodoSchema = new Schema<Todo>({
    items: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Define the Todo model
const TodoModel = model<Todo>('TodoList', TodoSchema);

// Connect to MongoDB
connect('<mongo-url>')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

export default TodoModel;
