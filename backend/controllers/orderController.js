import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";

// place order using cod method
const placeOrder = async (req, res) => {

    try {

        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            date: Date.now(),
            paymentMethod: "cod",
            payment: false
        }

        const newOrder = await new orderModel(orderData)
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
        
    }


}


// place order using stripe method
const placeOrderStripe = async (req, res) => {


}

// place order using Razorpay method
const placeOrderRazorpay = async (req, res) => {


}


// All orders data for dmin panel
const allOrders = async (req, res) => {


}

// Users order data for front end
const userOrders = async (req, res) => {


    try {

        const {userId} = req.body;
        const orders = await orderModel.find({userId})
        res.json({ success: true, orders })
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
        
    }


}


// update order status from admin pannel

const updateOrderStatus = async (req, res) => {


}

export {
    placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateOrderStatus
}