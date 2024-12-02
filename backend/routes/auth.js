const express = require('express');
const router = express.Router();
const User = require('../models/User');  // Suponiendo que tienes un modelo de usuario

// Ruta POST para login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar al usuario en la base de datos
    const user = await User.findOne({ username });

    // Verificar si el usuario existe
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Comparar las contraseñas (suponiendo que usas bcrypt para encriptación)
    const match = await user.comparePassword(password);  // Asegúrate de tener el método `comparePassword` en tu modelo de usuario

    if (!match) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Aquí generarías un token, por ejemplo, usando JWT
    const token = 'aqui_va_el_token_generado'; // Genera el token JWT aquí

    // Enviar el token como respuesta
    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;
