const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Biblioteca Pessoal',
    version: '1.0.0',
    description: 'Documentação da API de gerenciamento de livros com Express e MongoDB Atlas',
  },
  servers: [
    {
      url: 'https://ubiquitous-winner-7qvx44vwv94cxj6w-3000.app.github.dev',
      description: 'GitHub Codespace - Porta 3000',
    },
  ],
};


const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], 
};

module.exports = swaggerJSDoc(options);
