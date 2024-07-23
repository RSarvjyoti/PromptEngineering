document.getElementById('registerBtn').addEventListener('click', register);
document.getElementById('loginBtn').addEventListener('click', login);
document.getElementById('generateBtn').addEventListener('click', generateShayari);

async function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5000/api/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);
  } catch (error) {
    alert('Registration failed');
  }
}

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      document.getElementById('auth').style.display = 'none';
      document.getElementById('generate').style.display = 'block';
    } else {
      alert(data.error);
    }
  } catch (error) {
    alert('Login failed');
  }
}

async function generateShayari() {
  const keyword = document.getElementById('keyword').value;
  const token = localStorage.getItem('token');

  try {
    const response = await fetch('http://localhost:5000/api/shayari/generate', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ keyword })
    });

    const data = await response.json();
    if (data.shayari) {
      document.getElementById('shayari').innerText = data.shayari;
    } else {
      alert(data.error);
    }
  } catch (error) {
    alert('Failed to generate Shayari');
  }
}
