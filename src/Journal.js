import './index.css';
import Header from './Header'
import parasite from "./images/parasite.png"
import cycle from './images/cycle.png'
import fantasy from "./images/fantasy.png"
import and from "./images/And.png"
import tunnel from "./images/tunnel.png"
import Dune from "./images/Dune.png"
import Segun from "./images/Segun.png"
import Fantasy2 from "./images/Fantasy2.png"

function Journal(){
    return (
        <>
        <Header/>
        <div className='px-[5%]'>
        <Zagolovok title='Журнал Чернокнижник' pt='32'/>
        <div className='flex gap-20 p-[24px] justify-center'>
            <div className='flex flex-col gap-6'>
                <JBlock title="Что прочитать, если ждете «Паразит: Серый»" desc="5 апреля 2024 г." img={parasite}/>
                <JBlock title="Книжные циклы: что почитать " desc="5 апреля 2024 г." img={cycle}/>
            </div>
            <div className='w-8/12'>
                <JBlock title="Лучшие книги фэнтези" desc="30 марта 2024 г." img={fantasy} />   
            </div>
        </div>
        <div className='px-[5%]'>
        <Zagolovok title='Новости' pt="14"/>
        <div className='flex  p-[24px] justify-center'>
            <div className='flex flex-row gap-6'>
            <Nblock title="5 апреля 2024 г." desc="Что по книгам: фильм по «К себе нежно» и программа ярмарки non-fiction" color="#64818E"/>
            <Nblock title="5 апреля 2024 г." desc="Что по книгам: сериал по «Задаче трёх тел» и целеустремлённые миллениалы" color="#64818E"/>
            <Nblock title="5 апреля 2024 г." desc="Что по книгам: новый роман Маркеса и сюжеты, покорившие «Букмейт»" color="#64818E"/>
            <Nblock title="5 апреля 2024 г." desc="Что по книгам: прабабушка Тейлор Свифт и пустынный Арракис" color="#64818E"/>
            </div>
        </div>
        </div>
        <div className='px-[5%]'>
        <Zagolovok title='Лонгриды' pt="14"/>
        <div className='flex  p-[24px] justify-center'>
        <div className='flex flex-row gap-8'>
                <JBlock title="Тест: как хорошо вы помните сказки Андерсена" desc="2 апреля 2024 г." img={and}/>
                <JBlock title="Зачем читать триллер Яны Вагнер «Тоннель»" desc="28 марта 2024 г." img={tunnel}/>
                <JBlock title="В каком порядке читать «Дюну»" desc="22 марта 2024 г." img={Dune}/>
        </div>
        </div>
        </div>
        <div className='px-[5%]'>
        <Zagolovok title='Подборки' pt="14"/>
        <div className='flex  p-[24px] justify-center'>
        <div className='flex flex-row gap-8'>
                 <JBlock title="В каком порядке читать «Дюну»" desc="22 марта 2024 г." img={Dune}/>  
                <JBlock title="Лучшие книги фэнтези" desc="30 марта 2024 г." img={Fantasy2}/>
                <JBlock title="Какие экранизации скоро выйдут" desc="10 августа 2023  г." img={Segun}/>
        </div>
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
            <div className='absolute  w-full left-[10px] bottom-[20px]  z-20'>
                <p className='text-xl  font-Semibold  text-white'>{title}</p>
                <p className='text-sm  font-Regular text-Gray'>{desc}</p>
            </div>
        </div>
    );
};
function Nblock({title,desc,color}) {
    return (
        <div className='relative w-full h-full pt-8'>
        <div className={'w-[280px] h-[190px]  pt-[15px] bg-['+color+'] rounded-xl flex  pl-[15px] flex-col'}>
        <p className='text-lg font-Semibold  text-white'>{title}</p>
        <p className='text-xl font-Regular text-Gray'>{desc}</p>
        </div>
        <div className='absolute   z-20 '>
        
        </div>
        </div>
    );}
function Zagolovok({title, pt}){
    return(
        <p className={'text-[35px] text-white pl-[2%] font-Black pt-'+ pt}>{title}</p>
    )
}

export default Journal;