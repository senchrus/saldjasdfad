import './index.css';
import Header from './Header';
import Fantasy3 from "./fantasyimages/Fantasy3.png";
import Ring from './fantasyimages/Ring.png';
import Author from "./images/Author.svg";
import Rating from './images/Rating.svg'





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
        </div >
        <div className='font-Light w-full text-white text-xl flex justify-center  flex-col   gap-16 pt-16 px-40'>
            <p>Однажды профессор по имени Джон Рональд Руэл Толкин создал мир, который мог бы стать реальным. Ведь у него было всё: история сотворения, следы ушедших эпох, география, карты разных периодов, литература, народы с проработанной до мельчайших подробностей культурой. Так же поступил друг профессора, Клайв Стейплз Льюис – и многие читатели открыли дверь в Нарнию.</p>
            <p>Колдуньи, говорящие львы, орки, эльфы, драконы – конечно, все эти волшебные существа появились в фольклоре разных народов много веков назад. Но талантливые авторы вроде Толкина и Льюиса помогли им навсегда войти в современную культуру.</p>
            <p>Теперь весь мир знает и любит истории, которые называются фэнтези. А мы собрали для вас лучших из лучших – на случай, если вы вдруг ещё о них не слышали!</p>
        </div>
        <ListElem num  ="1" img = ""  title= "" author = "" desc = "" rate = "" ratecount = "" price = ""/>
        {/* <div className='flex justify-center gap-14 mt-24 mb-10'>
            <div className='relative text-9xl'>
            <p className='text-Zelya font-Karmina  absolute bottom-0 -left-16 '>1</p>
            <img src={Ring} alt='' className='h-full w-full  '/>
            </div>
            <div className='flex gap-8 flex-col'>
                <div className=''>
                <p className='text-white font-Black text-4xl -mb-4'>Властелин Колец.<br/> Хранители Кольца</p>
                </div>
                <div className='flex gap-4 border-b-white border-b pb-0.5 -mb-8'>
                    <img src={Author} alt=''/>
                    <p className='text-white font-Light text-xl w-full'>Джон Рональд Толкин</p>
                </div>
                <div className='flex text-white font-Light items-center text-xl gap-1 -mb-8'>
                    <img src={Rating} alt=''/>
                    <p>4.6</p>
                </div>
                <div className='text-[#BABABA] font-Light text-xs -mb-4'>
                    <p>ОЦЕНОК 1.4K</p>
                </div>
                <div className='-mb-4'>
                    <p className='font-Black text-white text-2xl'>Описание книги</p>
                    <p className='flex text-white text-base text-Light  '>На хрупкие плечи хоббита Фродо Бэггинса, парня <br/>
                    высотой в половину человеческого роста, ложится <br/>
                    тяжёлая ноша – спасение целого мира. Ему нужно <br/>
                    уничтожить кольцо, которое разыскивает тёмный <br/>
                    властелин Мордора. Вместе со своими друзьями-<br/>
                    полуросликами он покидает родную деревню, чтобы <br/>
                    отправиться в опасное путешествие.</p>
                </div>
                <div className=''>
                    <p className='text-white text-2xl font-Black mb-4'>538 ₽</p>
                    <button className='flex justify-end  px-[80px] py-[10px]  bg-[#62749E] rounded-lg  gap-[40px] text-xl items-center z-10 '>
                    <p className='text-white font-Light '>В корзину</p> 
                    </button>
                </div>
            </div>
        </div> */}
        </>
    )
}

function ListElem(num,img,title,author,desc,rate,ratecount,price){
    <div className='flex justify-center gap-14 mt-24 mb-10'>
            <div className='relative text-9xl'>
            <p className='text-Zelya font-Karmina  absolute bottom-0 -left-16 '>{num}</p>
            <img src={img} alt='' className='h-full w-full  '/>
            </div>
            <div className='flex gap-8 flex-col'>
                <div className=''>
                <p className='text-white font-Black text-4xl -mb-4'>{title}</p>
                </div>
                <div className='flex gap-4 border-b-white border-b pb-0.5 -mb-8'>
                    <img src={Author} alt=''/>
                    <p className='text-white font-Light text-xl w-full'>{author}</p>
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
                    <button className='flex justify-end  px-[80px] py-[10px]  bg-[#62749E] rounded-lg  gap-[40px] text-xl items-center z-10 '>
                    <p className='text-white font-Light '>В корзину</p> 
                    </button>
                </div>
            </div>
        </div>
}
const fantasyList = [
    {
        num: 1,
        img: {Ring},
        title:  "Властелин Колец.<br/> Хранители Кольца",
        author:  "Джон Рональд Толкин",
        desc:  "На хрупкие плечи хоббита Фродо Бэггинса, парня <br/> высотой в половину человеческого роста, ложится <br/> тяжёлая ноша – спасение целого мира. Ему нужно <br/> уничтожить кольцо, которое разыскивает тёмный <br/> властелин Мордора. Вместе со своими друзьями-<br/> полуросликами он покидает родную деревню, чтобы <br/>отправиться в опасное путешествие.",
        rate:  4.6,
        ratecount: "1.4K",
        price: "538 ₽",

    },
    {
        num: 1,
        img: {Ring},
        title:  "Властелин Колец.<br/> Хранители Кольца",
        author:  "Джон Рональд Толкин",
        desc:  "На хрупкие плечи хоббита Фродо Бэггинса, парня <br/> высотой в половину человеческого роста, ложится <br/> тяжёлая ноша – спасение целого мира. Ему нужно <br/> уничтожить кольцо, которое разыскивает тёмный <br/> властелин Мордора. Вместе со своими друзьями-<br/> полуросликами он покидает родную деревню, чтобы <br/>отправиться в опасное путешествие.",
        rate:  4.6,
        ratecount: "1.4K",
        price: "538 ₽",

    },
    {
        num: 1,
        img: {Ring},
        title:  "Властелин Колец.<br/> Хранители Кольца",
        author:  "Джон Рональд Толкин",
        desc:  "На хрупкие плечи хоббита Фродо Бэггинса, парня <br/> высотой в половину человеческого роста, ложится <br/> тяжёлая ноша – спасение целого мира. Ему нужно <br/> уничтожить кольцо, которое разыскивает тёмный <br/> властелин Мордора. Вместе со своими друзьями-<br/> полуросликами он покидает родную деревню, чтобы <br/>отправиться в опасное путешествие.",
        rate:  4.6,
        ratecount: "1.4K",
        price: "538 ₽",

    },
    {
        num: 1,
        img: {Ring},
        title:  "Властелин Колец.<br/> Хранители Кольца",
        author:  "Джон Рональд Толкин",
        desc:  "На хрупкие плечи хоббита Фродо Бэггинса, парня <br/> высотой в половину человеческого роста, ложится <br/> тяжёлая ноша – спасение целого мира. Ему нужно <br/> уничтожить кольцо, которое разыскивает тёмный <br/> властелин Мордора. Вместе со своими друзьями-<br/> полуросликами он покидает родную деревню, чтобы <br/>отправиться в опасное путешествие.",
        rate:  4.6,
        ratecount: "1.4K",
        price: "538 ₽",

    },
    {
        num: 1,
        img: {Ring},
        title:  "Властелин Колец.<br/> Хранители Кольца",
        author:  "Джон Рональд Толкин",
        desc:  "На хрупкие плечи хоббита Фродо Бэггинса, парня <br/> высотой в половину человеческого роста, ложится <br/> тяжёлая ноша – спасение целого мира. Ему нужно <br/> уничтожить кольцо, которое разыскивает тёмный <br/> властелин Мордора. Вместе со своими друзьями-<br/> полуросликами он покидает родную деревню, чтобы <br/>отправиться в опасное путешествие.",
        rate:  4.6,
        ratecount: "1.4K",
        price: "538 ₽",

    },
    {
        num: 1,
        img: {Ring},
        title:  "Властелин Колец.<br/> Хранители Кольца",
        author:  "Джон Рональд Толкин",
        desc:  "На хрупкие плечи хоббита Фродо Бэггинса, парня <br/> высотой в половину человеческого роста, ложится <br/> тяжёлая ноша – спасение целого мира. Ему нужно <br/> уничтожить кольцо, которое разыскивает тёмный <br/> властелин Мордора. Вместе со своими друзьями-<br/> полуросликами он покидает родную деревню, чтобы <br/>отправиться в опасное путешествие.",
        rate:  4.6,
        ratecount: "1.4K",
        price: "538 ₽",

    },
    {
        num: 1,
        img: {Ring},
        title:  "Властелин Колец.<br/> Хранители Кольца",
        author:  "Джон Рональд Толкин",
        desc:  "На хрупкие плечи хоббита Фродо Бэггинса, парня <br/> высотой в половину человеческого роста, ложится <br/> тяжёлая ноша – спасение целого мира. Ему нужно <br/> уничтожить кольцо, которое разыскивает тёмный <br/> властелин Мордора. Вместе со своими друзьями-<br/> полуросликами он покидает родную деревню, чтобы <br/>отправиться в опасное путешествие.",
        rate:  4.6,
        ratecount: "1.4K",
        price: "538 ₽",

    },
    {
        num: 1,
        img: {Ring},
        title:  "Властелин Колец.<br/> Хранители Кольца",
        author:  "Джон Рональд Толкин",
        desc:  "На хрупкие плечи хоббита Фродо Бэггинса, парня <br/> высотой в половину человеческого роста, ложится <br/> тяжёлая ноша – спасение целого мира. Ему нужно <br/> уничтожить кольцо, которое разыскивает тёмный <br/> властелин Мордора. Вместе со своими друзьями-<br/> полуросликами он покидает родную деревню, чтобы <br/>отправиться в опасное путешествие.",
        rate:  4.6,
        ratecount: "1.4K",
        price: "538 ₽",

    },
]



export default Njournal;