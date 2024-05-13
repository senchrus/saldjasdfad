import "./index.css";
import Header from "./Header";
import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from "./Cartcontext";
import Rating from "./images/Rating.svg";
import Author from "./images/Author.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function ListElem({id,img,title,author,rate,ratecount,price,desc,inBasket}){
    const { cart, setCart, addToCart, itemsInCart, setitemsInCart} = useContext(CartContext)
    const item = {id,img,title,author,rate,ratecount,price,desc, inBasket}
    const [inBask, setInBask] = useState(inBasket)
    
    const onPlusHandler = () => {
        setInBask(inBask + 1);
        setitemsInCart(itemsInCart + 1);
        const itemToUpdate = cart.find(item => item.id === id);
        if (itemToUpdate) {
            const updatedCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, inBasket: item.inBasket + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        }
    };
    
    const onMinusHandler = () => {
        if (inBask - 1 <= 0) {
            setitemsInCart(itemsInCart - 1);
            const newCart = cart.filter(item => item.id !== id)
            setCart(newCart);
        } else {
            setInBask(inBask - 1);
            setitemsInCart(itemsInCart - 1);
            const updatedCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, inBasket: item.inBasket - 1 };
                }
                return item;
            });
            setCart(updatedCart);
        }}
    return(
        <div className='flex justify-center gap-14 mt-24 mb-10'>
                <div className='relative text-9xl'>
                <img src={img} alt='' className='h-full w-full  '/>
                </div>
                <div className=' w-[50%] h'>
                <div className='flex gap-8 flex-col'>
                    <div className=''>
                    <p className='text-white font-Black text-4xl -mb-4 '>{title}</p>
                    </div>
                    <div className='flex gap-4 border-b-white border-b pb-0.5 -mb-8 '>
                        <img src={Author} alt=''/>
                        <p className='text-white font-Light text-xl '>{author}</p>
                    </div>
                    <div className='flex text-white font-Light items-center text-xl gap-1 -mb-8'>
                        <img src={Rating} alt=''/>
                        <p>{rate}</p>
                    </div>
                    <div className='text-[#BABABA] font-Light text-xs -mb-4'>
                        <p>ОЦЕНОК {ratecount}</p>
                    </div>
                    <div className='-mb-4'>
                        <p className='font-Black text-white text-2xl'>Описание книги</p>
                        <p className='flex text-white text-base text-Light  '>{desc}</p>
                    </div>
                    <div className=''>
                        <p className='text-white text-2xl font-Black mb-4'>{price} ₽</p>
                        <div className="flex gap-5">
                        <button onClick={onMinusHandler}className='flex justify-center px-[25px] py-[10px] w-10 h-10 bg-gray-300 rounded-lg    items-center z-10 '>
                        <p className=' font-Light text-4xl'>-</p> 
                        </button>
                        <div className=' flex justify-center items-center w-10 h-10 bg-gray-300 rounded-lg px-[25px] py-[10px] '><p>{inBask}</p></div>
                        <button onClick = {onPlusHandler}className='flex justify-center   px-[25px] py-[10px] w-10 h-10 bg-gray-300 rounded-lg   items-center z-10 '>
                        <p className=' font-Light text-4xl'>+</p> 
                        </button>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>)
    }
export default function Cart (){
    const { cart, setCart, addToCart, itemsInCart} = useContext(CartContext)
    const [summ, setSumm] = useState(0)
    useEffect(( ) => {
        let a = 0
        cart.map((item) => a = a + item.inBasket * +item.price)
        setSumm(a)
    },[itemsInCart])
    if (cart.length == 0){
        return(
            <>
        <Header/>
        <div className="min-h-full h-[100vh] flex items-center justify-center">
        <p className="text-8xl text-white  ">Корзина пуста</p>
        </div>
        </>
        )
    }
    return(
        <>
        <Header/>
        <div className='grid  grid-cols-1  col-span-3 justify-center items-center'>
                {cart.map((elem,i)=> {return <ListElem id = {elem.id} img = {elem.img} title = {elem.title} author = {elem.author} desc = {elem.desc} rate = {elem.rate} ratecount = {elem.ratecount} price = {elem.price} inBasket ={elem.inBasket} key = {i}/>})}
                <div className="flex flex-col gap-10 justify-center items-center">
                <p className="text-white text-4xl">Итоговая цена: {summ}</p>
                <Link to={"/login"}><button className='bg-Zelya hover:bg-[#5da130] rounded-lg  p-1.5  text-white text-xl'>Оплатить заказ</button></Link>
                </div>
        </div>
        <Footer/>
        </>
    )
}
