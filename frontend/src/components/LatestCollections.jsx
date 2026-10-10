import  { useContext, useEffect } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';
import React, { useState } from 'react';


const LatestCollections = () => {
    
      const { products } = useContext(ShopContext); 
      const [latestProducts,setLatestProducts] = useState([]);

      useEffect(()=>{
        setLatestProducts(products.slice(0,10));
      },[products])
    return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the .
        </p>
      </div>
      
        {/* Rending Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProducts.map((items,index)=> (
              <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price} />
            ))
          }
        </div>
        
    </div>
  )
}


export default LatestCollections
