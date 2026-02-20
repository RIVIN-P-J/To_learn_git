function toggleForm(event) {
  event.preventDefault();
  
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  
  loginForm.classList.toggle('active');
  registerForm.classList.toggle('active');
  
  // Clear messages when switching
  clearMessages();
}

function clearMessages() {
  const loginMsg = document.getElementById('loginMessage');
  const registerMsg = document.getElementById('registerMessage');
  
  loginMsg.textContent = '';
  loginMsg.classList.remove('show', 'success', 'error');
  
  registerMsg.textContent = '';
  registerMsg.classList.remove('show', 'success', 'error');
}

function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const messageDiv = document.getElementById('loginMessage');
  
  // Send login request
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    messageDiv.classList.add('show');
    
    if (data.success) {
      messageDiv.textContent = '✓ ' + data.message + '. Redirecting...';
      messageDiv.classList.add('success');
      messageDiv.classList.remove('error');
      
      // Store user info in localStorage
      localStorage.setItem('user', email);
      
      // Redirect after 1.5 seconds
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    } else {
      messageDiv.textContent = '✗ ' + data.message;
      messageDiv.classList.add('error');
      messageDiv.classList.remove('success');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    messageDiv.textContent = '✗ An error occurred. Please try again.';
    messageDiv.classList.add('show', 'error');
    messageDiv.classList.remove('success');
  });
}

function handleRegister(event) {
  event.preventDefault();
  
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const messageDiv = document.getElementById('registerMessage');
  
  // Send register request
  fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, confirmPassword })
  })
  .then(response => response.json())
  .then(data => {
    messageDiv.classList.add('show');
    
    if (data.success) {
      messageDiv.textContent = '✓ ' + data.message + '. Switching to login...';
      messageDiv.classList.add('success');
      messageDiv.classList.remove('error');
      
      // Clear form fields
      document.getElementById('register').reset();
      
      // Switch to login form after 1.5 seconds
      setTimeout(() => {
        document.getElementById('registerForm').classList.remove('active');
        document.getElementById('loginForm').classList.add('active');
        clearMessages();
        
        // Pre-fill login email
        document.getElementById('loginEmail').value = email;
      }, 1500);
    } else {
      messageDiv.textContent = '✗ ' + data.message;
      messageDiv.classList.add('error');
      messageDiv.classList.remove('success');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    messageDiv.textContent = '✗ An error occurred. Please try again.';
    messageDiv.classList.add('show', 'error');
    messageDiv.classList.remove('success');
  });
}
