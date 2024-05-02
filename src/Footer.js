import './index.css';
import Branch2 from './images/Branch2.png';
import logo from './images/logo.svg';
import mark from './images/mark.svg'
import phone from './images/phone.svg';
import fax from './images/fax.svg';
import vk from './images/logo-vk.svg';
import tg from './images/logo-tg.svg';
import wp from './images/logo-wp.svg';
import starichok from './images/starichok.png'

function Footer() {
    return (
    <div className='flex gap-[200px] relative '>
    <div className=' flex items-center relative '>
      <img src={Branch2} alt=''/>
      <img src={logo} alt='' className='w-[240px] h-[140px] absolute left-[200px]'/>
    </div>
    <div className='flex  flex-col justify-center gap-10'>
        <div className='flex  gap-[20px]'>
            <img src = {mark} alt=''/>
            <p className='text-white font-Light  text-lg'>197198, г. Санкт-Петербург, ул. Ропшинская, д. 1/32, Лит. А</p>
        </div>
        <div className='flex flex-row gap-48'>
        <div className='flex  gap-[20px]'>
            <img src = {phone} alt=''/>
            <p className='text-white font-Light  text-lg w-full' >(123) 456-7890</p>
        </div>
            <div className='flex  gap-[20px]'>
                <img src = {fax} alt=''/>
                <p className='text-white font-Light  text-lg w-full'>(123) 456-7890</p>
            </div>
        </div>
        <div className='flex flex-row gap-72'>
            <p className='text-white font-Light  text-lg'>Социальные сети</p>
            <div className='flex flex-row gap-5'>
            <img src = {vk} alt=''/>
            <img src = {tg} alt=''/>
            <img src = {wp} alt=''/>
            </div>    
        </div>
    </div>
    <div className='absolute bottom-24 left-48 font-Light text-white text-lg  flex  gap-10 mb-8 border-t-BorderTop border-t-[0.5px] w-full'>
        <div className='flex gap-32'>
        <a href="#home">О нас</a>
        <a href="#contact" className = "">Контакты</a>
        <a href="#about"> Помощь</a>
        <a href="#about"> Магазины</a>
        <a href="#about"> Трудоустройство</a>
        </div>
        
    </div>
    <div>
        <div className='absolute bottom-10  flex items-center font-Light text-white text-lg left-[45%] '>
            <p>© 2024, Чернокнижник</p>
        </div>
    </div>
    <img src = {starichok} alt='' className='absolute right-0 bottom-0 '/>
    </div>
    );
  }
  
  export default Footer;