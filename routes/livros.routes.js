const express = require('express');
const router = express.Router();
const controller = require('../controllers/livros.controller');

// Rota base: /livros
router.get('/', controller.getLivros);         // Lista todos os livros
router.post('/', controller.addLivro);         // Adiciona novo livro
router.delete('/:id', controller.deleteLivro); // Remove um livro por ID
router.put('/:id', controller.updateLivro);    // Atualiza um livro por ID

module.exports = router;
/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Lista todos os livros
 *     responses:
 *       200:
 *         description: Lista de livros
 */

/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Adiciona um novo livro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               genero:
 *                 type: string
 *               lido:
 *                 type: boolean
 *               local:
 *                 type: string
 *     responses:
 *       201:
 *         description: Livro criado
 */
