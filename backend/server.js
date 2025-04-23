import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = 'mongodb://mongodb:27017/mern-task-manager';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.get('/api/tasks', (req, res) => {
  res.json({ message: 'Get all tasks' });
});

app.post('/api/tasks', (req, res) => {
  res.json({ message: 'Create a new task' });
});

app.get('/api/tasks/:id', (req, res) => {
  res.json({ message: `Get task with ID: ${req.params.id}` });
});

app.put('/api/tasks/:id', (req, res) => {
  res.json({ message: `Update task with ID: ${req.params.id}` });
});

app.delete('/api/tasks/:id', (req, res) => {
  res.json({ message: `Delete task with ID: ${req.params.id}` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});