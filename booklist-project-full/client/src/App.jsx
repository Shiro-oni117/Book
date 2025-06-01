import React, { useState, useEffect } from 'react';
import AuthForm from './components/AuthForm';
import BookList from './components/BookList';
import StatsPanel from './components/StatsPanel';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

function App() {
  const [userId, setUserId] = useState(null);
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    if (!userId) return;
    const res = await axios.get(`${API_BASE}/books/${userId}`);
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, [userId]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">📚 Mi Lista de Libros Favoritos</h1>
      {!userId ? (
        <AuthForm setUserId={setUserId} />
      ) : (
        <>
          <StatsPanel books={books} />
          <BookList books={books} setBooks={setBooks} userId={userId} />
        </>
      )}
    </div>
  );
}

export default App;
