import express from 'express'
import { placeOrder, placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateOrderStatus, verifyStripe } from "../controllers/orderController.js"
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
const orderRouter = express.Router()

// Admin features
orderRouter.post("/list",adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateOrderStatus);

// payment features
orderRouter.post("/place",authUser,placeOrder);
orderRouter.post("/razorpay", placeOrderRazorpay);
orderRouter.post("/stripe", placeOrderStripe);

//verify payment
orderRouter.post('/verifyStripe', authUser,verifyStripe)

// userfeatures
orderRouter.post("/userorders",authUser,userOrders)

export default orderRouter