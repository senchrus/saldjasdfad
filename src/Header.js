import logo from './images/logo.svg';
import user from './images/User.svg';
import cart from './images/Basket.svg'
import './index.css';

function Header() {
  return (
    <div className="fixed w-full flex bg-Black justify-between px-20 items-center z-10 px-[5%]">
        <img src = {logo}  alt = "" className=""></img>
        <div className='text-white font-Light flex gap-[150px] text-lg mt-[10px] '>
          <a className = " " href="#home">Книги</a>
          <a href="#contact" className = "">Акции</a>
          <a href="#about"> Журнал</a>
          <a href="#about"> Контакты</a>
        </div>
        <div className='flex gap-8 h-[10%] mt-[10px]'>
        <a href="#govno" ><img src={user}/></a>
        <a href="#govn"><img src={cart}/></a>
        </div>
    </div>
  );
}

export default Header;
