# Symbol Website with Login

A modern symbol website with a beautiful login and registration system.

## Features

✨ **Modern Design** - Beautiful gradient UI with smooth animations
🔐 **Authentication** - Secure login and registration system
📱 **Responsive** - Works perfectly on desktop and mobile devices
⚡ **Fast** - Built with Express.js for optimal performance
🎨 **Customizable** - Easy to modify styles and add features

## Project Structure

```
├── server.js              # Express server
├── package.json          # Dependencies and scripts
└── public/
    ├── index.html        # Login/Register page
    ├── dashboard.html    # User dashboard
    ├── styles.css        # Main styles
    └── script.js         # Frontend logic
```

## Installation

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Start the server:**
   ```
   npm start
   ```
   Or for development with auto-reload:
   ```
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

## Demo Credentials

You can test the login with these credentials:

- **Email:** `user@example.com`
- **Password:** `password123`

Or:

- **Email:** `admin@symbol.com`
- **Password:** `admin123`

Or create a new account using the register form!

## Features

### Login Page
- Clean, modern login form
- Smooth toggle between login and registration
- Input validation
- Success/error messages with animations

### Registration
- Email validation
- Password confirmation
- Duplicate email detection
- Automatic form switch after successful registration

### Dashboard
- User-specific greeting
- Logout functionality
- Feature cards with icons
- Responsive layout
- Protected route (redirects to login if not authenticated)

## Customization

### Change Colors
Edit the gradient colors in [public/styles.css](public/styles.css):
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More Features
- Replace in-memory user storage with a database (MongoDB, PostgreSQL, etc.)
- Add password hashing with `bcrypt`
- Implement JWT tokens for sessions
- Add email verification
- Create additional pages and routes

### Modify User Data
Edit the users object in [server.js](server.js#L13):
```javascript
const users = {
  'user@example.com': 'password123',
  'admin@symbol.com': 'admin123'
};
```

## Security Notes

⚠️ **This is a demo project.** For production use:
1. Use a real database instead of in-memory storage
2. Hash passwords with `bcrypt`
3. Implement proper session management (JWT or sessions)
4. Add HTTPS/SSL
5. Implement rate limiting
6. Add CSRF protection
7. Use environment variables for secrets

## Technologies Used

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** CSS Gradients, Flexbox, CSS Grid

## License

MIT
