const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./database/db');
const livrosRoutes = require('./routes/livros.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conexão com MongoDB Atlas
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/livros', livrosRoutes);

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📘 Documentação Swagger em http://localhost:${PORT}/api-docs`);
});
