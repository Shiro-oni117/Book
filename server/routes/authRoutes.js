const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existeUsuario = await User.findOne({ email });
    if (existeUsuario) return res.status(400).json({ mensaje: 'El usuario ya existe' });

    const nuevoUsuario = new User({ email, password });
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(400).json({ mensaje: 'Usuario no encontrado' });

    const esValido = await bcrypt.compare(password, usuario.password);
    if (!esValido) return res.status(400).json({ mensaje: 'Contraseña incorrecta' });

    res.status(200).json({ mensaje: 'Inicio de sesión exitoso', userId: usuario._id });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

module.exports = router;
