import React, { useState, useEffect } from 'react';
import Footer from '../footer';

const Cart = ({ size, cartlist, onSizeChange }) => {
    const [cartList, setCartList] = useState(cartlist);

    // Update cartList state when cartlist prop changes
    useEffect(() => {
        setCartList(cartlist);
    }, [cartlist]);

    // Delete item from cartList
    function deleteItem(index) {
        const updatedCartList = cartList.filter((item, i) => i !== index);
        setCartList(updatedCartList);
        if (typeof onSizeChange === 'function') {
            onSizeChange(size - 1);
        }
    }

    // Increase quantity of item
    function increase(index) {
        const updatedCartList = [...cartList];
        updatedCartList[index].que += 1;
        setCartList(updatedCartList);
    }

    // Decrease quantity of item
    function decrease(index) {
        const updatedCartList = [...cartList];
        if (updatedCartList[index].que > 1) {
            updatedCartList[index].que -= 1;
            setCartList(updatedCartList);
        }
    }

    const [noCart, setCart] = useState(true);
    useEffect(() => {
        if (size >= 1) {
            setCart(false);
        } else {
            setCart(true);
        }
    }, [size]);

    // Calculate total
    const total = cartList.reduce((acc, item) => {
        return acc + item.price * item.que;
    }, 0);

    return (
        <div >
            {noCart && (
                <div className='w-9/12 mx-auto flex flex-col items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-28 h-[300px] text-[#00000053]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <div className='text-5xl text-[#00000053]'>No items in the cart</div>
                </div>
            )}
            {!noCart && (
                <div >
                    {cartList.map((data, index) => (
                        <div key={index} className='  my-[20px] mx-[auto] ' >
                            <table className=' w-[100%] h-[px] text-center border border-solid border-black'>
                                <tbody>
                                    <tr className='border border-solid font-serif text-1xl '>
                                        <th className='p-10 border border-solid border-[#cdc5c5] bg-[#E3E6F3] max-[1200px]:hidden max-[1200px]:p-3 max-[1200px]:text-xs'>Sno</th>
                                        <th className='p-10 border border-solid border-[#cdc5c5] bg-[#E3E6F3] max-[1200px]:p-3 max-[1200px]:text-xs'>Image</th>
                                        <th className='p-10 border border-solid border-[#cdc5c5] bg-[#E3E6F3] max-[1200px]:p-3 max-[1200px]:text-xs'>Product</th>
                                        <th className='p-10 border border-solid border-[#cdc5c5] bg-[#E3E6F3] max-[1200px]:hidden max-[1200px]:text-xs'>Price</th>
                                        <th className='p-10 border border-solid border-[#cdc5c5] bg-[#E3E6F3] max-[1200px]:p-3 max-[1200px]:text-xs'>Quantity</th>
                                        <th className='p-10 border border-solid border-[#cdc5c5] bg-[#E3E6F3] max-[1200px]:p-3 max-[1200px]:text-xs'>Edit</th>
                                        <th className='p-10 border border-solid border-[#cdc5c5] bg-[#E3E6F3] max-[1200px]:p-2 max-[1200px]:text-xs'>Subtotal</th>
                                    </tr>
                                    <tr className='border border-solid text-lg '>
                                        <td className='p-10 border border-solid border-[#cdc5c5] bg-[#eeeef1] max-[1200px]:hidden '><div>{index + 1}</div></td>
                                        <td className='p-10 border border-solid border-[#cdc5c5] bg-[#eeeef1] max-[1200px]:p-3 flex flex-col justify-center items-center max-[1200px]:text-xs'><img className='w-32' src={data.img} alt="" /><div>{data.brand}</div></td>
                                        <td className='p-10 border border-solid border-[#cdc5c5] bg-[#eeeef1] max-[1200px]:p-3 max-[1200px]:text-xs'><div>{data.name}</div></td>
                                        <td className='p-10 border border-solid border-[#cdc5c5] bg-[#eeeef1] max-[1200px]:p-3 max-[1200px]:hidden'><div>₹{data.price}</div></td>
                                        <td className='p-10 border border-solid border-[#cdc5c5] bg-[#eeeef1] max-[1200px]:p-3 max-[1200px]:text-xs'><div>{data.que}</div></td>
                                        <td className='p-10 border border-solid border-[#cdc5c5] bg-[#eeeef1] max-[1200px]:p-3 max-[1200px]:text-xs'>
                                            <div className='flex gap-2 justify-center max-[1200px]:flex-col'>
                                                <button onClick={() => decrease(index)} className='border border-solid  bg-[#088178] text-[white]  px-2 py-0 font-bold rounded-[4px]'>-</button>
                                                <button onClick={() => deleteItem(index)} className='border border-solid bg-[#ff5858] text-[white]  px-3 py-1 font-semibold  rounded-[4px]'>Delete</button>
                                                <button onClick={() => increase(index)} className='border border-solid bg-[#088178] text-[white]  px-2 py-0 font-bold  rounded-[4px]'>+</button>
                                            </div>
                                        </td>
                                        <td className='p-10 border border-solid border-[#eee6e6] bg-[#eeeef1] max-[1200px]:p-3 max-[1200px]:text-xs'><div> <span className='font-bold mr-1'>₹</span> {(data.que) * (data.price)}</div></td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </div>
                    ))}
                    <div className=' w-[60%] my-[80px] mx-[auto] flex gap-12 justify-around max-[1200px]:flex-col max-[1200px]:items-center'>
                        <div>
                            <div className='mb-[20px] font-serif font-bold text-xl'>Apply Coupon</div>
                            <div>
                                <input className='w-[350px] p-[10px] border border-solid border-[gray] hover:border-none' type="text" placeholder='Apply coupon' />
                                <button className='border border-solid border-[#088178] bg-[#088178]  py-[10px] px-[14px] font-bold text-[white]'>Apply</button>
                            </div>
                        </div>
                        <div>
                            <div className='mb-[20px] font-serif font-bold text-xl'>Cart Total</div>
                            <table className='border border-solid border-[gray] rounder-[102px]'>
                                <tbody >
                                    <tr  >
                                        <td className='py-4 px-6 border border-solid text-lg font-serif'>Cart Subtotal</td>
                                        <td className='py-4 px-6 border border-solid text-lg'> <span className='font-bold mr-1'>₹</span> {total}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-4 px-6 border border-solid text-lg font-serif'>Shipping</td>
                                        <td className='py-4 px-6 border border-solid text-lg font-serif' >Free</td>
                                    </tr>
                                    <tr>
                                        <td className='py-4 px-6 border border-solid font-bold text-lg '>Total</td>
                                        <td className='py-4 px-6 border border-solid font-bold text-lg '> <span className='font-bold mr-1'>₹</span> {total}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className='border border-solid border-[#088178] bg-[#088178]  py-[10px] px-[14px] font-bold text-[white] mt-[20px]'>Proceed to checkout</button>
                        </div>

                    </div>
                    <hr/>
                    <Footer/>
                </div>
                
            )}
        </div>
    );
}

export default Cart;
