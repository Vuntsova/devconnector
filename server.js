const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//Connect DB
connectDB();

//Init Middleware
// express.json() is a method inbuilt in express to recognize the incoming Request Object
// as a JSON Object. This method is called as a middleware in your application using the code:
// app.use(express.json());
// express.urlencoded() is a method inbuilt in express to recognize
// the incoming Request Object as strings or arrays.
app.use(cors());
app.use(express.json({ extended: false }));

// console.log(`what si this : ${express.json({ extended: false })}`);
app.get('/', (req, res) => res.send('Hello'));

// Define Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Runs on Port: ${PORT}`));
