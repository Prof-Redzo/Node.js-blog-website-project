// app.js

// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { createRequire } from 'module';
import { config } from 'dotenv';
import { logger } from './log-middleware.js';

const require = createRequire(import.meta.url);

// Create an instance of Express
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nodejs-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Define the schema for the blog posts
const Post = mongoose.model('Post', {
  title: String,
  content: String
});

// Define the schema for the admin users
const User = mongoose.model('User', {
  username: String,
  password: String
});

// Set up view engine and middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Set up view engine and middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

// Route for admin user
app.get('/admin', (req, res) => {
  res.render('admin');
});

app.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  // Validate user credentials (this is just a placeholder, you should use a proper authentication mechanism)
  const user = await User.findOne({ username, password });
  if (user) {
    res.redirect('/admin/dashboard');
  } else {
    res.send('Invalid username or password');
  }
});

app.get('/admin/dashboard', (req, res) => {
  res.send('Admin Dashboard');
});

// Route for blog posts
app.get('/posts', async (req, res) => {
  // Fetch all blog posts from the database
  const posts = await Post.find();
  res.render('posts', { posts });
});

app.post('/posts', async (req, res) => {
  const { title, content } = req.body;
  // Create a new blog post
  const post = new Post({ title, content });
  await post.save();
  res.redirect('/posts');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});