const app = require('./app');
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json'); 


// Use Swagger UI to serve the documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
