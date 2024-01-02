const app = require('./app'); // Import the app
const port = 3000;

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
