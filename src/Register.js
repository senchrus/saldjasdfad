import './index.css';
import Starik from "./images/Starik.png";
import TopBranch from "./images/TopBranch.png";
import ProstBranch from "./images/SideBranch.png";
import Google from "./images/GoogleIcon.svg";
import Logo from "./images/logo.svg"

function Reg () {
    return (
      <div className=''>
        <img src={Starik} className='absolute object-cover h-[100vh]' alt=''/>
        <img src={TopBranch} className='absolute top-0 left-[50%] h-[30vh]' alt=''/>
        <img src={ProstBranch} className='absolute right-0 object-cover h-[100vh]' alt=''/>
        <div className='flex flex-col relative '>
            <div className=' w-full  h-full flex justify-center items-center pl-[20%] pt-[10%] flex-col gap-10'>
                <div className='flex text-white font-HBold gap-10 text-xl justify-center'>
                    
                    <div class="  sm:max-w-xl sm:mx-auto">
		            <a href="#" class="font-display max-w-sm font-bold leading-tight">
			            <span class="link link-underline link-underline-black text-white"> Вход </span>
		            </a>
	                </div>
                    <div className=''>
                        <p className='text-N4'>Регистрация</p>
                    </div>
                </div>

                <div className='gap-4 flex flex-col font-HMedium'>
                <input className='pl-4 border-b outline-none text-lg  rounded-lg' type="text" placeholder='Имя' />
                <input className='pl-4 border-b outline-none text-lg  rounded-lg' type="text" placeholder='Фамилия' />
                    <input className='pl-4 border-b outline-none text-lg  rounded-lg' type="text" placeholder='E-mail' />
                    <input className=' pl-4 border-b outline-none text-lg rounded-lg' type="text" placeholder='Пароль' />
                    <input className='pl-4 border-b outline-none text-lg  rounded-lg' type="text" placeholder='Подтвердите пароль' />
                    <label className='text-white flex items-center gap-4'><input
                    type="checkbox"
                    name="myCheckbox"
                    defaultChecked={true} 
                /> Запомнить меня</label>
                <button className='bg-Zelya hover:bg-[#5da130] rounded-lg  p-1.5  text-white text-xl'>Регистрация</button>
                <p className='border-t border-N4 text-N4 text-base flex justify-center pt-2  '></p>
                    <button className=' transition-all flex justify-end  pl-[15px] pr-[40px] py-[10px]  rounded-lg border-2 border-N4 hover:bg-[#62639b60] hover:border-[#62639b60] gap-10 text-lg items-center'>
                        <img src={Google} className='flex ' alt=''/>
                        <p className='text-[#FFFFFF] font-HMedium '>Продолжить с Google</p>
                    </button>
                </div>
                <img alt='' src={Logo} className='mt-[-40px]'/>
            </div>
        </div>
        </div>

)
}
export default Reg