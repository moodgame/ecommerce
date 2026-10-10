import express from 'express';
import { listProduct, addProduct, removeProduct, singleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

// إنشاء مسار الـ Router الخاص بالمنتجات
const productRouter = express.Router();

// تعريف مسارات إضافة وإزالة واستعراض المنتجات
productRouter.post('/add', adminAuth, upload.fields([
    { name: 'image1', maxCount: 1 }, 
    { name: 'image2', maxCount: 1 }, 
    { name: 'image3', maxCount: 1 }, 
    { name: 'image4', maxCount: 1 }
]), addProduct);

productRouter.post('/remove', removeProduct);
productRouter.post('/single', singleProduct);
productRouter.get('/list', listProduct);

// تصدير الـ Router لاستخدامه في أماكن أخرى من التطبيق
export default productRouter;
