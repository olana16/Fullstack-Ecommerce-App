import express from 'express';
import { addToCart,updateCart,getCart }  from '../controllers/cartController.js';

const cartRouter = express.Router();

// Route to add a product to the user's cart
cartRouter.post('/add', addToCart);

// Route to update the user's cart
cartRouter.update('/update', updateCart);

// Route to get the user's cart
cartRouter.get('/get', getCart);