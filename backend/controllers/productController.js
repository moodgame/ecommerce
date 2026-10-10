import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// وظيفة لإضافة منتج
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
        console.log("Request body:", req.body);
        console.log("Files received:", req.files);

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter(item => item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(item => new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                    if (error) {
                        console.log("Error uploading image:", error.message);
                        return resolve(null);
                    }
                    console.log("Uploaded image URL:", result.secure_url);
                    return resolve(result.secure_url);
                });
                uploadStream.end(item.buffer);
            }))
        );

        imagesUrl = imagesUrl.filter(url => url !== null); // تصفية الروابط الفارغة

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller == "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        };

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product Added", data: product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// وظيفة لقائمة المنتجات
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// وظيفة لإزالة منتج
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product removed successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// وظيفة للحصول على منتج واحد
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { listProduct, addProduct, removeProduct, singleProduct };
