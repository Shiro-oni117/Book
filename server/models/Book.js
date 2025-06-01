const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  titulo: { type: String, required: true },
  autor: String,
  año: Number,
  reseña: String
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
