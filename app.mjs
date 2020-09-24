import express from 'express';
import db from './db/db.mjs';
import cors from 'cors';

// Set up the express app
const app = express();// get all todos
app.use(cors())

app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});