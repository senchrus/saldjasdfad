import logo from './images/logo.svg';
import user from './images/User.svg';
import basket from './images/Basket.svg'
import './index.css';
import { Link, ScrollRestoration  } from 'react-router-dom';
import { storedata } from "./StoreData";
import { CartContext } from "./Cartcontext";
import React, { useState, useContext } from 'react';

function Header() {
  const { cart, setCart, addToCart, itemsInCart} = useContext(CartContext)
 
  return (
    <div className="fixed w-full flex bg-Black justify-between  items-center z-30 px-[5%]">
        <Link to={"/"}><img src = {logo}  alt = "" className=""></img></Link>
        <div className='text-white font-Light flex gap-[150px] text-lg mt-[10px] '>
          <Link to={'/store'} class=" max-w-sm  leading-tight">
            <span class="link link-underline link-underline-black text-white"> Книги </span>
          </Link>
          <Link to={'/sales'} class=" max-w-sm  leading-tight">
            <span class="link link-underline link-underline-black text-white"> Акции </span>
          </Link>
          <Link to={'/journal'} class=" max-w-sm  leading-tight">
            <span class="link link-underline link-underline-black text-white"> Журнал </span>
          </Link>
        </div>
        <div className='flex gap-8 h-[10%] mt-[10px]'>
        <Link to={"/login"}><a href="#govno" ><img src={user} alt='' className='w-8 h-8'/></a></Link>
        <div className='relative'>
        <Link to={"/cart"}><img src={basket} alt='' className=' w-8 h-8'/></Link>
        <p className='text-white absolute -left-2 bottom-0 rounded-full w-4 h-4 bg-[#42641F] items-center flex justify-center p-[9px]'>{itemsInCart}</p>
        </div>
  

        </div>
        <ScrollRestoration />
    </div>
  );
}

export default Header;
