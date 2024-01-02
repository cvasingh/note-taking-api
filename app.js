const express = require('express')
const cors = require('cors');
const connectMongoose = require('./mongoose.config');
const noteRouter = require('./routers/noteRouter');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectMongoose();

// Use the routers
app.use('/note', noteRouter);

module.exports = app;
