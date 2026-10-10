import { json } from "express";
// Placing orders using COD Method
import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now()
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed Successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// Placing orders using COD Method
const placeOrderStripe = async (req,res) => {

}

// Placing orders using COD Method
const placeOrderRazorpay = async (req,res) => {

}

// All Orders  data for admin Panel
const allorders =  async (req,res) => {

    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
                
    }

}

// user Order Data for Frontend
const userOrders = async (req,res) => {

    try {
        
        const { userId } = req.body
        
        const orders = await orderModel.find({ userId })
        res.json({success:true,orders})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });    
    }
}

// update order status from admi Panel
const updateStatus = async (req,res) =>{
  try {
    
    const { orderId, status } = req.body
    await orderModel.findByIdAndUpdate(orderId, { status })
    res.json({success:true, message:'status Update'})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });    
}
} 

export { placeOrder, placeOrderStripe , placeOrderRazorpay , allorders , userOrders , updateStatus};

