const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Simple in-memory user storage (replace with database in production)
const users = {
  'user@example.com': 'password123',
  'admin@symbol.com': 'admin123'
};

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  if (users[email] && users[email] === password) {
    return res.json({ success: true, message: 'Login successful', user: email });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

app.post('/api/register', (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ success: false, message: 'Passwords do not match' });
  }

  if (users[email]) {
    return res.status(400).json({ success: false, message: 'Email already registered' });
  }

  users[email] = password;
  return res.json({ success: true, message: 'Registration successful' });
});

app.listen(PORT, () => {
  console.log(`Symbol website running on http://localhost:${PORT}`);
});
