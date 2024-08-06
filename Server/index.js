const express = require('express');
require('./config/dbconn');
const User = require('./config/User');
const Product = require('./config/products');
const port = 3389;
const app = express();
const cors = require('cors');
// const path = require('path');

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });
app.use(express.json());- 
app.use(cors({
  origin:"http://localhost:3000"
}));
// Signup API
app.post('/signup', async (req, res) => {
    try {
      const user = new User(req.body);
      let result = await user.save();
      result = result.toObject();
      delete result.password;
      res.send(result);
    } catch (err) {
      res.status(400).send('Error creating user: ' + err.message);
    }
  });
  
  // Login API
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid email or password', success: false });
      }
      let result = user.toObject();
      delete result.password;
      res.status(200).json({ message: 'Logged in successfully', success: true, user: result });
    } catch (err) {
      res.status(500).json({ message: 'Server error: ' + err.message, success: false });
    }
  });
  
  // Get all products
  app.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).send('Server error: ' + err.message);
    }
  });
  //polaroids
  app.get('/products/polaroids', async (req, res) => {
    try {
      const products = await Product.find({ category: 'polaroids' });
      res.json(products);
    } catch (err) {
      res.status(500).send('Server error: ' + err.message);
    }
  });
  


  // Fetch a single product by ID
  app.get('/product/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

//api for email address

const Subscriber = require('./config/Subscriber');

// Endpoint to add a new subscriber
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        res.status(201).json({ message: 'Successfully subscribed' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'Email already subscribed' });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    }
});

// Add product API
app.post('/productsadd', async (req, res) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (err) {
    res.status(400).send('Error adding product: ' + err.message);
  }
});

// Make the server listen to the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
