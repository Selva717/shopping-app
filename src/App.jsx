import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Blog from './components/pages/Blog';
import Contact from './components/pages/contact';  
import Cart from './components/pages/cart';
import Shop from './components/pages/shop';

function App() {
  const [cartList, setCartList] = useState([]);

  const handleClick = (data) => {
    setCartList(prevCartList => [...prevCartList, data]);
  };

  const handleSizeChange = (newSize) => {

    setCartList(prevCartList => {

      return newSize >= 0 ? prevCartList.slice(0, newSize) : [];
    });
  };

  useEffect(() => {

  }, [cartList]);

  return (
    <div className='w-[100%]'>
      <Navbar size={cartList.length} />
      
      <Routes>
        <Route path='' element={<Index handleClick={handleClick}/>} />
        <Route path='/shop' element={<Shop handleClick={handleClick}/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart size={cartList.length} cartlist={cartList} onSizeChange={handleSizeChange}/>} />
      </Routes>
    </div>
  );
}

export default App;
