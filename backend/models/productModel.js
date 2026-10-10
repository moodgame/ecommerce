import mongoose from "mongoose";

// تعريف مخطط المنتج
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }
});

// إنشاء نموذج المنتج أو استخدام النموذج الموجود إذا كان موجودًا مسبقًا
const productModel = mongoose.models.product || mongoose.model("product", productSchema);

// تصدير نموذج المنتج لاستخدامه في أماكن أخرى من التطبيق
export default productModel;
