const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

router.get('/:userId', async (req, res) => {
  try {
    const libros = await Book.find({ userId: req.params.userId });
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los libros' });
  }
});

router.post('/', async (req, res) => {
  const { userId, titulo, autor, año, reseña } = req.body;
  try {
    const nuevoLibro = new Book({ userId, titulo, autor, año, reseña });
    await nuevoLibro.save();
    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el libro' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const libroActualizado = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(libroActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el libro' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: 'Libro eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el libro' });
  }
});

module.exports = router;
