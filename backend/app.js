const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db');

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/products', async (req, res) => {
   try {
      const result = await db.query('SELECT * FROM products;');
      res.status(200).json(result.rows);
   } catch (e) {
      console.log('Error ocurred: ', e);
   }
});

app.get('/products/:id', async (req, res) => {
   const productId = req.params.id;

   try {
      const result = await db.query('SELECT * FROM products WHERE id = $1;', [
         productId,
      ]);
      res.status(200).json(result.rows[0]);
   } catch (e) {
      console.log('Error ocurred: ', e);
   }
});

app.get('/reviews', async (req, res) => {
   try {
      const result = await db.query('SELECT * FROM reviews;');
      res.status(200).json(result.rows);
   } catch (e) {
      console.log('Error ocurred: ', e);
   }
});

app.listen(PORT, () => {
   console.log('Server is running on port: ', PORT);
});
