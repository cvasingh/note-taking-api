const url = "mongodb+srv://cvasingh:cvasingh123@cluster0.r8kw7.mongodb.net/note-taking-api?retryWrites=true&w=majority"

const { connect } = require('mongoose');

const connectMongoose = async () => {
    try {
        const connection = await connect(url);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
};

module.exports = connectMongoose;