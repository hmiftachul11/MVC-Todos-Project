const express = require('express');
const cors = require('cors');

const connectDB = require('./mongodb');
const todoRoute = require('./routes/todoRoute');

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", todoRoute);

const PORT = 8000;

app.listen(PORT, () => {
    console.log('Servet is running in port 8000');
})