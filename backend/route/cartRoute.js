import express from 'express';
import { addToCart,updateCart,getCart }  from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';

const cartRouter = express.Router();

// Route to add a product to the user's cart
cartRouter.post('/add',authUser, addToCart);

// Route to update the user's cart
cartRouter.post('/update',authUser, updateCart);

// Route to get the user's cart
cartRouter.post('/get',authUser, getCart);

export default cartRouter;