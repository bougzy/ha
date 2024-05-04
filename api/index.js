const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

// MongoDB connection
mongoose.connect('mongodb+srv://coimmarket:coimmarket@coimmarket.zlifkrv.mongodb.net/coimmarket');

// Allow requests from specific frontend domain(s)
const allowedOrigins = [
  "https://coinmarketcaplimited.vercel.app", // Remove the trailing slash
  // "https://vercel.com/patrickspecials-projects/virgo"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // Allow cookies and credentials
}));

// Define routes for user and admin operations
app.use('/api/users', require('./routes/usersRoutes'));

// Route for greeting message
app.get('/', (req, res) => {
  res.send('Welcome to our server!'); // Send a greeting message
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
