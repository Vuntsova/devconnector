const express = require('express');
const connectDB = require('./config/db');
const app = express();
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//Connect DB
connectDB();
//Init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello'));

// Define Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Runs on Port: ${PORT}`));
