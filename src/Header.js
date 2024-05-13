import logo from './images/logo.svg';
import user from './images/User.svg';
import cart from './images/Basket.svg'
import './index.css';
import { Link, ScrollRestoration  } from 'react-router-dom';

function Header() {
  return (
    <div className="fixed w-full flex bg-Black justify-between px-20 items-center z-30 px-[5%]">
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
        <Link to={"/login"}><a href="#govno" ><img src={user} alt=''/></a></Link>
        <a href="#govn"><img src={cart} alt=''/></a>
        </div>
        <ScrollRestoration />
    </div>
  );
}

export default Header;
