import { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/Shopcontext';

const Cart = () => {
    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            if (!items || items === "undefined") continue; // تجاهل العناصر غير الصحيحة
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems]);

    const handleIncrease = (id, size) => {
        const item = cartData.find((item) => item._id === id && item.size === size);
        if (item) {
            updateQuantity(id, size, item.quantity + 1);
        }
    };

    const handleDecrease = (id, size) => {
        const item = cartData.find((item) => item._id === id && item.size === size);
        if (item && item.quantity > 1) {
            updateQuantity(id, size, item.quantity - 1);
        }
    };

    return (
        <div className='border-t pt-14'>
            <div className='text-2xl mb-3'>
                <Title text1={'Your'} text2={'CART'} />
            </div>

            <div>
                {cartData.map((item, index) => {
                    const productData = products.find((product) => product._id === item._id);

                    if (!productData) {
                        return null; // إذا لم يتم العثور على productData، تخطي هذا العنصر.
                    }

                    return (
                        <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                            <div className='flex items-start gap-6'>
                                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                                <div>
                                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                    <div className='flex items-center gap-5 mt-2'>
                                        <p>{currency}{productData.price}</p>
                                        <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-intro__qty-calc j-expose__product-intro__qty-calc flex items-center gap-2" >
                                <div className="reduce" onClick={() => handleDecrease(item._id, item.size)}>
                                    <span style={{ verticalAlign: 'middle', display: 'inline-block', lineHeight: 0 }}>
                                        <svg style={{ width: '16px', height: '16px' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 7V9H4V7H12Z" fill="#000"></path>
                                        </svg>
                                    </span>
                                </div>
                                <input value={item.quantity} type="text" readOnly style={{ width: '40px', textAlign: 'center' }} />
                                <div className="add" onClick={() => handleIncrease(item._id, item.size)}>
                                    <span style={{ verticalAlign: 'middle', display: 'inline-block', lineHeight: 0 }}>
                                        <svg style={{ width: '16px', height: '16px' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7 12H9V9H12V7H9V4H7V7H4V9H7V12Z" fill="#000"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
                        </div>
                    );
                })}
            </div>

            <div className='flex justify-end my-20'>
                <div className='w-full sm:w-[450px]'>
                    <CartTotal />
                    <div className='w-full text-end'>
                      <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
