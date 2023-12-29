import express, { json } from 'express';
import bodyParser from 'body-parser';
import TodoModel from './connection';

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use(json());

// Add the route here
app.post('/todos', async (req, res) => {
  const { items } = req.body;
  try {
    const newTodo = new TodoModel({ items });
    await newTodo.save();
    res.status(201).json({ message: 'Todo submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to get all data
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await TodoModel.find();
    res.status(200).json(allTodos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/todos', async (req, res) => {
  const { id } = req.query;
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => console.log(`Server Listening on ${port}`));
