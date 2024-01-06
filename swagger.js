const express = require('express');
const router = express.Router();
const swaggerAutogen = require('swagger-autogen')();


const doc ={
    info:{
        version: "1.0.0",
        title:'Note taking api',
        description:''
    },
    host:'localhost:3000'
}

const outputFile = './swagger_output.json';
const endpointsFiles = ['./app.js']; // Specify the path to your main application file

swaggerAutogen(outputFile, endpointsFiles,doc);

router.use('/api-docs', express.static('./swagger-ui')); // Serve the Swagger UI


module.exports = router;
