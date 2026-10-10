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
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'><img src={assets.logo} className='w-36' alt="Logo" /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />

                <div className="group relative">
                    <img onClick={()=> token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile" />
                    {/* Dropdown Menue  */}
                    {token && 
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-stone-100 text-gray-500 rounded">
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
}
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
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






// import { useState, useContext } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/Shopcontext';
// import { assets } from '../assets/assets';

// const Navbar = () => {
//     const [visible, setVisible] = useState(false);
//     const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
//     const location = useLocation();

//     const logout = () => {
//         navigate('/login');
//         localStorage.removeItem('token');
//         setToken('');
//         setCartItems({});
//     };

//     return (
//         <div className='relative'>


//             <div className='flex flex-col sm:flex-row items-center justify-between sm:py-5 font-medium'>
//                 <Link to='/' className='hidden sm:block'><img src={assets.logo} className='w-36' alt="Logo" /></Link>

//                 <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                    
//                     <NavLink to='/' className='flex flex-col items-center gap-1'>
//                         <p>HOME</p>
//                         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                     </NavLink>
//                     <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//                         <p>COLLECTION</p>
//                         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                     </NavLink>
//                     <NavLink to='/about' className='flex flex-col items-center gap-1'>
//                         <p>ABOUT</p>
//                         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                     </NavLink>
//                     <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//                         <p>CONTACT</p>
//                         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                     </NavLink>
//                 </ul>

//                 <div className="hidden sm:flex items-center gap-6">
//                     {location.pathname === '/collection' && (
//                         <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />
//                     )}
                    
//                     <div className="group relative">
//                         {token ? (
//                             <img onClick={() => null} className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile" />
//                         ) : (
//                             <button onClick={() => navigate('/login')} className='border-2 border-gray-300 px-2 py-1 text-sm'>Register</button>
//                         )}
//                         {token && (
//                             <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
//                                 <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-stone-100 text-gray-500 rounded">
//                                     <p className='cursor-pointer hover:text-black'>My Profile</p>
//                                     <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                                     <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                     <Link to='/cart' className='relative'>
//                         <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
//                         <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
//                     </Link>
//                     <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu" />
//                 </div>
//             </div>

//             {/* Sidebar small menu for small screen */}
//             <div className={`fixed inset-0 z-[1000] bg-white transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
//                 <div className="flex flex-col text-gray-600 h-full">
//                     <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
//                         <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
//                         <p>Back</p>
//                     </div>
//                     <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border' to='/'>HOME</NavLink>
//                     <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border' to='/collection'>COLLECTION</NavLink>
//                     <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border' to='/about'>ABOUT</NavLink>
//                     <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border' to='/contact'>CONTACT</NavLink>
//                 </div>
//             </div>

//             {/* Bottom Navbar for mobile */}
//             <div className='sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-[999] flex justify-between items-center p-4'>
//                 <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-6 cursor-pointer' alt="Menu" />
//                 {location.pathname === '/collection' && (
//                     <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-6 cursor-pointer' alt="Search" />
//                 )}
//             </div>

//             {/* Top Navbar for mobile */}
//             <div className='sm:hidden flex justify-between items-center w-full px-4 py-3 bg-white shadow-lg'>
//                 <Link to='/'><img src={assets.logo} className='w-24' alt="Logo" /></Link>
//                 <div className='flex gap-4'>
//                     <Link to='/cart' className='relative'>
//                         <img src={assets.cart_icon} className='w-6 cursor-pointer' alt="Cart" />
//                         <p className='absolute top-0 right-0 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
//                     </Link>
//                     {token ? (
//                         <img onClick={() => null} src={assets.profile_icon} className='w-6 cursor-pointer' alt="Profile" />
//                     ) : (
//                         <button onClick={() => navigate('/login')} className='border-2 border-gray-300 px-2 py-1 text-sm'>Register</button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
