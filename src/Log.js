import './index.css';
import Starik from "./images/Starik.png";
import TopBranch from "./images/TopBranch.png";
import ProstBranch from "./images/SideBranch.png";
import Google from "./images/GoogleIcon.svg";
import React, { useState } from 'react';
import Logo from "./images/logo.svg"

function Log () {
    const [showPassword, setshowPassword] = useState(false);

    const handleTogPassVis = () => {
      setshowPassword(showPassword => !showPassword);
    }
  
    const [pass, setPass] = useState('');
  
    function inputPassword(e) {
      // e.preventDefault();
      setPass(e.target.value);
    }
    return (
      <div className=''>
        <img src={Starik} className='absolute object-cover h-[100vh]' alt=''/>
        <img src={TopBranch} className='absolute top-0 left-[50%] h-[30vh]' alt=''/>
        <img src={ProstBranch} className='absolute right-0 object-cover h-[100vh]' alt=''/>
        <div className='flex flex-col relative '>
            <div className=' w-full  h-full flex justify-center items-center pl-[20%] pt-[15%] flex-col gap-10'>
                <div className='flex text-white font-HBold gap-10 text-xl justify-center'>
                <div className=''>
                        <p className='text-N4'>Вход</p>
                        
                    </div>
                    <div class="  sm:max-w-xl sm:mx-auto">
		            <a href="#" class="font-display max-w-sm font-bold leading-tight">
			            <span class="link link-underline link-underline-black text-white"> Регистрация </span>
		            </a>
	            </div>
                    
                </div>

                <div className='gap-4 flex flex-col font-HMedium'>
                    <input className='pl-4 border-b outline-none text-lg  rounded-lg' type="text" placeholder='E-mail' />
                    <input value={pass} className='pl-4 border-b outline-none text-lg  rounded-lg' type={showPassword ? 'text' : 'password'} placeholder='Пароль' onInput={inputPassword} />
              <button onClick={handleTogPassVis} className='absolute right-10'>
                {
                  showPassword
                    ? <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9655 4.1621C11.9479 4.2016 11.5245 5.1409 10.5828 6.0826C9.32864 7.33695 7.74385 8 6 8C4.25615 8 2.67135 7.337 1.41716 6.08265C0.475458 5.1409 0.0520088 4.20155 0.0344588 4.16205C0.011739 4.11091 0 4.05556 0 3.9996C0 3.94364 0.011739 3.8883 0.0344588 3.83715C0.0520588 3.79765 0.475458 2.85855 1.41721 1.91695C2.6714 0.6629 4.2561 0 6 0C7.7439 0 9.3286 0.6629 10.5828 1.91695C11.5245 2.85855 11.9479 3.7976 11.9655 3.83715C11.9883 3.8883 12 3.94364 12 3.9996C12 4.05556 11.9882 4.11096 11.9655 4.1621ZM6 5.7996C6.35601 5.7996 6.70402 5.69403 7.00002 5.49625C7.29603 5.29846 7.52674 5.01734 7.66298 4.68843C7.79922 4.35952 7.83486 3.9976 7.76541 3.64844C7.69596 3.29927 7.52452 2.97854 7.27279 2.72681C7.02106 2.47507 6.70033 2.30364 6.35116 2.23419C6.002 2.16473 5.64008 2.20038 5.31117 2.33662C4.98226 2.47285 4.70114 2.70356 4.50336 2.99957C4.30557 3.29558 4.2 3.64359 4.2 3.9996C4.20053 4.47683 4.39034 4.93436 4.72779 5.27181C5.06524 5.60926 5.52277 5.79907 6 5.7996Z" fill="#87B553"/>
                    </svg>
                    : <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9655 4.1621C11.9479 4.2016 11.5245 5.1409 10.5828 6.0826C9.32864 7.33695 7.74385 8 6 8C4.25615 8 2.67135 7.337 1.41716 6.08265C0.475458 5.1409 0.0520088 4.20155 0.0344588 4.16205C0.011739 4.11091 0 4.05556 0 3.9996C0 3.94364 0.011739 3.8883 0.0344588 3.83715C0.0520588 3.79765 0.475458 2.85855 1.41721 1.91695C2.6714 0.6629 4.2561 0 6 0C7.7439 0 9.3286 0.6629 10.5828 1.91695C11.5245 2.85855 11.9479 3.7976 11.9655 3.83715C11.9883 3.8883 12 3.94364 12 3.9996C12 4.05556 11.9882 4.11096 11.9655 4.1621ZM6 5.7996C6.35601 5.7996 6.70402 5.69403 7.00002 5.49625C7.29603 5.29846 7.52674 5.01734 7.66298 4.68843C7.79922 4.35952 7.83486 3.9976 7.76541 3.64844C7.69596 3.29927 7.52452 2.97854 7.27279 2.72681C7.02106 2.47507 6.70033 2.30364 6.35116 2.23419C6.002 2.16473 5.64008 2.20038 5.31117 2.33662C4.98226 2.47285 4.70114 2.70356 4.50336 2.99957C4.30557 3.29558 4.2 3.64359 4.2 3.9996C4.20053 4.47683 4.39034 4.93436 4.72779 5.27181C5.06524 5.60926 5.52277 5.79907 6 5.7996Z" fill="#62749E"/>
                    </svg>
                }
              </button>
                    <label className='text-white flex items-center gap-4'><input
                    type="checkbox"
                    name="myCheckbox"
                    defaultChecked={true} 
                /> Запомнить меня</label>
                <button className='bg-Zelya hover:bg-[#5da130] rounded-lg  p-1.5  text-white text-xl'>Войти</button>
                <p className='border-t border-N4 text-N4 text-base flex justify-center pt-2 hover:underline '>Забыли пароль? </p>
                    <button className=' transition-all flex justify-end  pl-[15px] pr-[40px] py-[10px]  rounded-lg border-2 border-N4 hover:bg-[#62639b60] hover:border-[#62639b60] gap-10 text-lg items-center'>
                        <img src={Google} className='flex ' alt=''/>
                        <p className='text-[#FFFFFF] font-HMedium '>Продолжить с Google</p>
                    </button>
                </div>
                <img alt='' src={Logo} className='mt-[-30px]'/>
            </div>
        </div>
        </div>

)
}
export default Log