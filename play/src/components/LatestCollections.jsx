import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // استيراد أنماط التنقل
import { ShopContext } from '../context/Shopcontext';
import Title from './Title';
import ProductItem from './ProductItem';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'; // استيراد مكون التنقل

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products); // عرض جميع المنتجات
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem Ipsum هو نص افتراضي يستخدم في صناعة الطباعة والتنضيد. Lorem Ipsum هو المعيار الصناعي.
        </p>
      </div>

      {/* عرض المنتجات بتأثير 3D Coverflow */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
          scale: 0.8,
        }}
        pagination={{ clickable: true }}
        navigation={true} // إضافة التنقل
        className='mySwiper'
      >
        {latestProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`border border-gray-300 rounded-lg p-4 shadow-sm transform transition-transform duration-500`}>
              <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestCollections;
