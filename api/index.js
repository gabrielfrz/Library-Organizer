const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const livrosRoutes = require('./routes/livros.routes');
const connectDB = require('./database/db');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/livros', livrosRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
