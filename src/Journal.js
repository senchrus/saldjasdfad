import './index.css';
import Header from './Header'
import parasite from "./images/parasite.png"
import cycle from './images/cycle.png'
import fantasy from "./images/fantasy.png"

function Journal(){
    return (
        <>
        <Header/>
        <div className='px-[5%]'>
        <p className='text-[35px] text-white pl-20 pt-32 font-Black'>Журнал Чернокнижник</p>
        <div className='flex gap-20 p-[24px] justify-center'>
            <div className='flex flex-col gap-6'>
                <JBlock title="Что прочитать, если ждете «Паразит: Серый»" desc="123" img={parasite}/>
                <JBlock title="Что прочитать, если ждете «Паразит: Серый»" desc="123" img={cycle}/>
            </div>
            <div className='w-8/12'>
                <JBlock title="Что прочитать, если ждете «Паразит: Серый»" desc="123" img={fantasy} />   
            </div>
        </div>
        </div>
        </>
    );
}
function JBlock({img,title,desc}) {
    return (
        <div className='relative w-full h-full
            after:content after:w-full after:h-full after:absolute after:bottom-0 after:left-0 after:z-10
            after:bg-gradient-to-t after:from-black after:to-transparent after:to-70% after:rounded-b-xl'>
            <img src={img} className='rounded-xl w-full h-full object-cover'/>
            <div className='absolute  w-[380px] left-[15px] bottom-[20px]   z-20'>
                <p className='text-xl font-Semibold  text-white'>{title}</p>
                <p className='text-sm font-Regular text-Gray'>{desc}</p>
            </div>
        </div>
    );
};

export default Journal;