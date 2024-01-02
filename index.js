const express = require('express')
var cors = require('cors')
const port = 3000;
const connectMongoose = require('./mongoose.config');

const app = express()
app.use(cors());
app.use(express.json());

// // Connect to MongoDB // //
connectMongoose();

// // Use the routers for specific paths // //
const noteRouter = require('./routers/noteRouter');


app.use('/note', noteRouter);


app.listen(port, () => {
    console.log(`sever start at ${port}`);
})