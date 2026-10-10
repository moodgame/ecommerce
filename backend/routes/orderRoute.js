import express from 'express'
import {placeOrder, placeOrderStripe , placeOrderRazorpay , allorders , userOrders , updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list',adminAuth,allorders)
orderRouter.post('/status',adminAuth,updateStatus)

// Paymen Features 
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/rezorpay',authUser,placeOrderRazorpay)

// user Feature
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter