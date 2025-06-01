import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/books';

function BookList({ books, setBooks, userId }) {
  const [form, setForm] = useState({ titulo: '', autor: '', año: '', reseña: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addBook = async () => {
    const res = await axios.post(API_BASE, { ...form, userId });
    setBooks([...books, res.data]);
    setForm({ titulo: '', autor: '', año: '', reseña: '' });
  };

  const deleteBook = async (id) => {
    await axios.delete(\`\${API_BASE}/\${id}\`);
    setBooks(books.filter(book => book._id !== id));
  };

  return (
    <div className="mt-4">
      <h3>Agregar nuevo libro</h3>
      <div className="row g-2">
        <div className="col"><input className="form-control" name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} /></div>
        <div className="col"><input className="form-control" name="autor" placeholder="Autor" value={form.autor} onChange={handleChange} /></div>
        <div className="col"><input className="form-control" name="año" placeholder="Año" value={form.año} onChange={handleChange} /></div>
        <div className="col"><input className="form-control" name="reseña" placeholder="Reseña" value={form.reseña} onChange={handleChange} /></div>
        <div className="col-auto"><button className="btn btn-success" onClick={addBook}>➕ Añadir</button></div>
      </div>

      <ul className="list-group mt-4">
        {books.map(book => (
          <li key={book._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{book.titulo}</strong> — {book.autor} ({book.año})<br />
              <small>{book.reseña}</small>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => deleteBook(book._id)}>🗑️ Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
