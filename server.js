const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'src/app/assets/images'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/products', upload.single('productImage'), (req, res) => {
  const productData = req.body;
  const productImage = req.file;

  // Save product data and image path to the database (mocked here)
  const newProduct = {
    ...productData,
    productImage: productImage.filename
  };

  // Mock response
  res.status(201).json({
    message: 'Product added successfully!',
    product: newProduct
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
