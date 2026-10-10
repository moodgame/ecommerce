import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from './Title';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ category, subCategory }) => {
    const { products, currency } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0, 5));
        }
    }, [products]);

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={"PRODUCTS"} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((item, index) => (
                    <Link key={index} className='text-gray-700 cursor-pointer' to={`/product/${item._id}`}>
                        <div className="overflow-hidden">
                            <img className='hover:scale-110 transition ease-in-out' src={item.image[0]} alt="" />
                        </div>
                        <p className='pt-3 pb-1 text-sm'>{item.name}</p>
                        <p className='text-sm font-medium'>{currency}{item.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
