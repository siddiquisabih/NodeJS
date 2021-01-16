
'use strict';
const express = require('express');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);


app.get("/v1/user/api", (req, res, next) => {
    res.status(200).send({ name: "siddiqui" })
})

let options = {
    swaggerDefinition: {
        info: {
            description: 'Swagger API DOCS - SABIH SIDDIQUI',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:2500',
        basePath: '/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http',],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes.js'] //Path to the API handle folder
};
expressSwagger(options)



app.listen(2500, () => {
    console.log('server running on port 2500 ')
});

