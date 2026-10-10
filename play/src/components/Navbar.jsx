import { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';
import { assets } from '../assets/assets';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const { setShowSearch , getCartCount , navigate , token , setToken , setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }
    return (
        <div className='flex items-center justify-between py-5 font-medium '>
{/* <Link to='/'><img src={assets.logo} className='w-36 filter brightness-0 invert' alt="Logo" /></Link> */}
<Link to='/'><h1  className='w-36 items-center text-white' alt="Logo" >AutoClaim.AI</h1></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col gap-1'>
                    <p className='items-center text-white'>HOME</p>
<hr className='items-start w-2/4 border-none h-[2px] bg-gradient-to-r from-[#8b0089] to-[#434cff] hidden' />
                    </NavLink>
                <NavLink to='/collection' className='flex flex-col  gap-1'>
                    <p className='items-center text-white'>COLLECTION</p>
                    <hr className='items-start w-2/4 border-none h-[2px] bg-gradient-to-r from-[#8b0089] to-[#434cff] hidden' />
                    </NavLink>
                <NavLink to='/about' className='flex flex-col  gap-1'>
                    <p className='items-center text-white'>ABOUT</p>
                    <hr className='items-start w-2/4 border-none h-[2px] bg-gradient-to-r from-[#8b0089] to-[#434cff] hidden' />
                    </NavLink>
                <NavLink to='/contact' className='flex flex-col  gap-1'>
                    <p className='items-center text-white'>CONTACT</p>
                    <hr className='items-start w-2/4 border-none h-[2px] bg-gradient-to-r from-[#8b0089] to-[#434cff] hidden' />
                    </NavLink>
            </ul>

            <div className="flex items-center gap-6">
            <button onClick={() => setShowSearch(true)} className='flex items-center p-2 rounded sm:border-2 sm:border-gradient sm:inline-flex sm:items-center sm:space-x-2 sm:p-2'>
  <img src={assets.search_icon} className='w-5 img-gradient cursor-pointer sm:w-4 sm:img-gradient' alt="Search" />
  <span className='hidden sm:inline-block sm:text-white sm:text-sm sm:ml-2'>Search</span>
</button>
            <div className="group relative">
  {token ? (
    <>
      <img onClick={() => setShowSearch(true)} src={assets.profile_icon} className='w-5 cursor-pointer sm:w-4 sm:filter sm:brightness-0 sm:invert' alt="Profile" />
      <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-stone-100 text-gray-500 rounded">
          <p className='cursor-pointer hover:text-black'>My Profile</p>
          <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
          <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
        </div>
      </div>
    </>
  ) : (
<button onClick={() => navigate('/login')} className='text-white bg-gradient-to-r from-[#8b0089] to-[#434cff] hover:bg-gradient-to-r hover:from-[#8b0089] hover:to-[#434cff] px-4 py-2 rounded'>
  Register
</button>
  )}
</div>
                {/* <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link> */}
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu" />
            </div>

            {/* Sidebar small menu for small screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
