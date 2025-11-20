const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Hardcoded user credentials
const user = {
  username: "admin",
  password: "1234"
};

// POST /login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    res.json({
      success: true,
      message: "Login successful!"
    });
  } else {
    res.json({
      success: false,
      message: "Invalid credentials"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
