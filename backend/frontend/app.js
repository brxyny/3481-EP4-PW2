// Lógica para el login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Enviar solicitud de login al backend
  const response = await fetch('http://localhost:5001/api/auth/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (response.ok) {
      // Almacenar el token en localStorage
      localStorage.setItem('authToken', data.token);
      // Redirigir a la página principal
      window.location.href = 'home.html';
  } else {
      alert(data.message);
  }
});

// Lógica para cerrar sesión
document.getElementById('logoutBtn')?.addEventListener('click', () => {
  localStorage.removeItem('authToken');
  window.location.href = 'index.html'; // Redirige al login
});
