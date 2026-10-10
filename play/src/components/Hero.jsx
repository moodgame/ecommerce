import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const brands = [
    assets.brand1,
    assets.brand2,
    assets.brand3,
    assets.brand4,
    assets.brand5,
    assets.brand6,
    assets.brand7,
    assets.brand8,
    assets.brand9,
    assets.brand10,
  ];

  return (
    <div>
      <div className='flex flex-col sm:flex-row border rounded-[5px] border-blue-950'>
        {/* الجانب الأيسر */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 gap-2'>
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className='text-white w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              <p className='text-white font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
            </div>
            <h1 className='text-white prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>AutoClaim.Ai</h1>
            <div className="flex items-center gap-2">
              <p className='text-white font-semibold text-sm md:text-base'>LETS LOGIN NOW</p>
              <p className='text-white w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
          </div>
        </div>
        {/* الجانب الأيمن */}
        <div className='w-full sm:w-1/2 flex items-center justify-center sm:p-[50px] md:p-[50px] lg:p-[80px] relative'>
          <div className='relative w-full sm:w-auto'>
            <img className='rounded-[15px]' src={assets.logo} alt="Hero" />
            {/* <div className='absolute bottom-0 h-[110px] w-full bg-gradient-to-r from-[#8b0089] to-[#434cff] opacity-75 rounded-b-[15px] flex items-center justify-between p-4'>
              <div className='text-white justify-center'>
                <p className='mb-2'>Lapapapapapaap</p>
                <button className='bg-gradient-to-r from-[#8b0089] to-[#434cff] text-white hover:opacity-90 px-4 py-2 rounded-[10px] mt-2'>Button</button>
              </div>
              <div className='text-white justify-center'>
                <p className='mb-2'>Lapapapapapap</p>
                <button className='bg-gradient-to-r from-[#8b0089] to-[#434cff] text-white hover:opacity-90 px-4 py-2 rounded-[10px] mt-2'>Button</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className='marquee gap-5'>
        <div className='marquee-content'>
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className='marquee-item'>
              <img src={brand} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex flex-col sm:flex-row border rounded-[5px]">
        <div className="w-full sm:flexgap05 text-base text-gray-700">
          <div className="text-[#414141]">
            <div className="items-cente justify-center ]=">
              <h1 className='text-white prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>AutoClaim.Ai</h1>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex items-center justify-center   py-10 gap-2">
        <div className="text-[#414141]">
          <div className='border rounded-[5px] border-blue-950'>
            <div className="items-cente justify-center py-10 gap-2">
              <div className="text-white">
              <h1 className='text-white prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>AutoClaim.Ai</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='w-full sm:w-1/3 flex items-center justify-center sm:p-[50px] md:p-[50px] lg:p-[80px] relative'>
        <div className="text-[#414141]">
          <div className='border rounded-[5px] border-blue-950'>
            <div className="items-cente justify-center py-10 gap-2">
              <div className="text-white">
              <h1 className='text-white prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>AutoClaim.Ai</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='w-full sm:w-1/3 flex items-center justify-center sm:p-[50px] md:p-[50px] lg:p-[80px] relative'>
        <div className="text-[#414141]">
          <div className='border rounded-[5px] border-blue-950'>
            <div className="items-cente justify-center py-10 gap-2">
              <div className="text-white">
              <h1 className='text-white prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>AutoClaim.Ai</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default Hero;
