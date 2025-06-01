const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Biblioteca Pessoal',
    version: '1.0.0',
    description: 'API com MongoDB + Express em Serverless',
  },
  servers: [
    {
      url: '/',
      description: 'Servidor Serverless Vercel',
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

module.exports = require('swagger-jsdoc')(options);
