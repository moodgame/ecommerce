import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

// إنشاء مسار الـ Router الخاص بالمستخدمين
const userRouter = express.Router();

// تعريف مسارات تسجيل المستخدم وتسجيل الدخول وتسجيل دخول المدير
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

// تصدير الـ Router لاستخدامه في أماكن أخرى من التطبيق
export default userRouter;
