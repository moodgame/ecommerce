import mongoose from "mongoose";

// تعريف مخطط المستخدم
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }, // تأكد من أن الحقل يعرف كـ Object
  },
  { minimize: false }
);

// إنشاء نموذج المستخدم
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
