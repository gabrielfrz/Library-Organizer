const Livro = require('../models/Livro');

// GET /livros — listar todos os livros
exports.getLivros = async (req, res) => {
  try {
    const livros = await Livro.find().sort({ titulo: 1 }); // ordem alfabética
    res.json(livros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /livros — adicionar um novo livro
exports.addLivro = async (req, res) => {
  try {
    const novoLivro = new Livro(req.body);
    const livroSalvo = await novoLivro.save();
    res.status(201).json(livroSalvo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /livros/:id — deletar um livro
exports.deleteLivro = async (req, res) => {
  try {
    const { id } = req.params;
    await Livro.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /livros/:id — atualizar um livro
exports.updateLivro = async (req, res) => {
  try {
    const { id } = req.params;
    const livroAtualizado = await Livro.findByIdAndUpdate(id, req.body, { new: true });
    res.json(livroAtualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
