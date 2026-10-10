import userModel from "../models/userModel.js";

// إضافة المنتجات إلى سلة المستخدم
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};
    console.log("Before update:", cartData); // تسجيل البيانات قبل التحديث

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    console.log("After update:", cartData); // تسجيل البيانات بعد التحديث

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// تحديث المنتجات في سلة المستخدم
// تحديث المنتجات في سلة المستخدم
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    if (cartData[itemId]) {
      cartData[itemId][size] = quantity;
    } else {
      cartData[itemId] = { [size]: quantity };
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart Updated" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// جلب المنتجات من سلة المستخدم
// جلب المنتجات من سلة المستخدم
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };