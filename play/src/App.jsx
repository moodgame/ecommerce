import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Welcome from './pages/Welcome'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
   <div className='relative px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-fixed'> 
   {/* دوائر تتحرك بشكل عشوائي */} 
   {/* <div className="circle" style={{ top: '10%', left: '-100px' }}></div> 1  */}
   {/* <div className="circle" style={{ top: '200px', right: '-100px' }}></div> 2  */}
   {/* <div className="circle" style={{ top: '350px', left: 'calc(50% - 100px)' }}></div>    3  */}
   {/* <div className="circle" style={{ top: 'calc(50% + 100px)', right: '-100px' }}></div> 4  */}
   {/* <div className="circle" style={{ bottom: '10%', left: '-100px' }}></div> 5 */}
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/welcome' element={<Welcome/>} />

      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
