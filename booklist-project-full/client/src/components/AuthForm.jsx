import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/auth';

function AuthForm({ setUserId }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? \`\${API_BASE}/login\` : \`\${API_BASE}/register\`;
    const res = await axios.post(url, { email, password });
    if (res.data.userId) setUserId(res.data.userId);
  };

  return (
    <div className="card p-4">
      <h2>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="form-control mb-2" placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100" type="submit">{isLogin ? 'Entrar' : 'Crear cuenta'}</button>
      </form>
      <button className="btn btn-link mt-2" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </button>
    </div>
  );
}

export default AuthForm;
