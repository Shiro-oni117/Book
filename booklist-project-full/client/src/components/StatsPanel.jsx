import React from 'react';

function StatsPanel({ books }) {
  const total = books.length;
  const porAño = [...new Set(books.map(b => b.año))].length;

  return (
    <div className="alert alert-info">
      <strong>📊 Estadísticas:</strong> {total} libros | {porAño} años diferentes
    </div>
  );
}

export default StatsPanel;
