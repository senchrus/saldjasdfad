import './index.css';
import Kniggers from './images/Kniggers.png';
import strelk from './images/strelk.png';
function Sect1() {
    return(
        <div className='bg-Black h-[100vh] flex justify-end '>
            <div className='relative flex flex-col w-[700px] pt-[200px] right-[400px] '>
                <p className='font-Kompost text-5xl text-Zelya '>Открой магию слов</p>
                <p className='font-Karmina text-[150px] text-[#FFFFFF] mt-[-70px] mb-[-20px] tracking-wider '>Чернокнижник-</p>
                <p className='font-Light text-[#FFFFFF] text-xl w-[700px] pb-[20px] '>ваш проводник в мир тайн и магии литературы. 
                Откройте двери в волшебные истории, окутанные пеленой тайны, и обретите силу знания в нашем магазине книг. 
                У нас вы найдете не только произведения из мрачных уголков фэнтези и хоррора, 
                но и шедевры классики, которые будут вдохновлять и вас, и ваших героев</p>
                <div className=' flex justify-end'>
                <button className='flex justify-end  pl-[40px] pr-[10px] py-[10px]  rounded-lg border-4 border-Zelya gap-[40px] text-3xl items-center z-10'>
                    <p className='text-[#FFFFFF] font-Light '>Погрузится в магию</p>
                    <img src={strelk} className='flex '/>
                </button>
                </div>
            </div>
            <img src={Kniggers}  className='w-[1200px] absolute h-[100vh] object-cover right-[600px] ' alt=''/>
        </div>
    )
}
export default Sect1;
