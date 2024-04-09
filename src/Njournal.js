import './index.css';
import Header from './Header';
import Fantasy3 from "./fantasyimages/Fantasy3.png";
import Ring from './fantasyimages/Ring.png';
import Author from "./images/Author.svg"





function Njournal(){
    return(
        <>
        <Header/>
        <div className='relative w-full h-full
            after:content after:w-full after:h-full after:absolute after:bottom-0 after:left-0 after:z-10
            after:bg-gradient-to-t after:from-black after:via-transparent after:to-black  after:rounded-b-xl'>
            <img src={Fantasy3} className=' w-full h-full object-cover' alt=''/>
            <div className='absolute  w-full flex flex-col items-center top-48 z-20 gap-32 '>
                <p className='  text-[100px] font-Karmina text-white'>Лучшие книги фэнтези</p>
                <p className='  font-Regular text-Gray '>30 марта 2024 г.</p>
            </div>
        </div>
        <div className='font-Light w-full text-white text-xl flex justify-center  flex-col   gap-32 pt-16 px-40'>
            <p>Однажды профессор по имени Джон Рональд Руэл Толкин создал мир, который мог бы стать реальным. Ведь у него было всё: история сотворения, следы ушедших эпох, география, карты разных периодов, литература, народы с проработанной до мельчайших подробностей культурой. Так же поступил друг профессора, Клайв Стейплз Льюис – и многие читатели открыли дверь в Нарнию.</p>
            <p>Колдуньи, говорящие львы, орки, эльфы, драконы – конечно, все эти волшебные существа появились в фольклоре разных народов много веков назад. Но талантливые авторы вроде Толкина и Льюиса помогли им навсегда войти в современную культуру.</p>
            <p>Теперь весь мир знает и любит истории, которые называются фэнтези. А мы собрали для вас лучших из лучших – на случай, если вы вдруг ещё о них не слышали!</p>
        </div>
        <div className='flex justify-center gap-14 mt-64'>
            <div>
            <img src={Ring} alt=''/>
            </div>
            <div className='flex gap-8 flex-col'>
                <div className=''>
                <p className='text-white font-Black text-5xl '>Властелин Колец.<br/> Хранители Кольца</p>
                </div>
                <div className='flex gap-4 border-b-white border-b pb-0.5 '>
                    <img src={Author} alt=''/>
                    <p className='text-white font-Light text-xl w-full'>Джон Рональд Толкин</p>
                </div>
            </div>
        </div>
        </>
    )
}




export default Njournal;