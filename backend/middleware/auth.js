import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log('Authorization header:', authHeader); // تسجيل محتوى الهيدر للتحقق

  if (!authHeader) {
    return res.json({
      success: false,
      message: "Not Authorized. Please login again.",
    });
  }

  const token = authHeader.split(' ')[1]; // استخراج التوكن من الهيدر الذي يحتوي على "Bearer token"
  console.log('Extracted token:', token); // تسجيل محتوى التوكن للتحقق

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id; // تعيين userId من التوكن المفكك
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
