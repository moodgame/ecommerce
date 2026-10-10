import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// تحميل المتغيرات البيئية من ملف .env
dotenv.config();

// تهيئة التطبيق
const app = express();
const port = process.env.PORT || 4000;

// الاتصال بقاعدة البيانات وخدمات الطرف الثالث
connectDB();
connectCloudinary(); // تأكد من الاتصال بـ Cloudinary

// إضافة الـ Middlewares
app.use(express.json());
app.use(cors());

// تعريف مسارات الـ API
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order',orderRouter);

// مسار الجذر لاختبار عمل الـ API
app.get('/', (req, res) => {
    res.send("API Working");
});

// بدء تشغيل الخادم
app.listen(port, () => console.log('Server started on PORT : '+ port));
