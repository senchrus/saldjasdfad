import './index.css';
import Header from './Header';
import Author from "./images/Author.svg";
import Rating from "./images/Rating.svg";
import Footer from "./Footer.js"




function Njournal(){
    return(
        <>
        <Header/>
        <div className='relative w-full h-full
            after:content after:w-full after:h-full after:absolute after:bottom-0 after:left-0 after:z-10
            after:bg-gradient-to-t after:from-black after:via-transparent after:to-black  after:rounded-b-xl'>
            <img src="/fantasyimages/Fantasy3.png" className=' w-full h-full object-cover' alt=''/>
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
        {fantasyList.map((elem,i)=> {return <ListElem num = {elem.num} img = {elem.img} title = {elem.title} author = {elem.author} desc = {elem.desc} rate = {elem.rate} ratecount = {elem.ratecount} price = {elem.price} key = {i}/>})}
        <Footer/>
        </>
    )
}

function ListElem({num,img,title,author,desc,rate,ratecount,price}){
    return(
    <div className='flex justify-center gap-14 mt-24 mb-10'>
            <div className='relative text-9xl'>
            <p className='text-Zelya font-Karmina  absolute bottom-0 -left-16 '>{num}</p>
            <img src={img} alt='' className='h-full w-full  '/>
            </div>
            <div className=' w-[50%] h'>
            <div className='flex gap-8 flex-col'>
                <div className=''>
                <p className='text-white font-Black text-4xl -mb-4 '>{title}</p>
                </div>
                <div className='flex gap-4 border-b-white border-b pb-0.5 -mb-8 '>
                    <img src={Author} alt=''/>
                    <p className='text-white font-Light text-xl '>{author}</p>
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
                    <p className='text-white text-2xl font-Black mb-4'>{price}</p>
                    <button className='flex justify-end  px-[80px] py-[10px]  bg-[#62749E] rounded-lg  gap-[40px] text-xl items-center z-10 '>
                    <p className='text-white font-Light '>В корзину</p> 
                    </button>
                </div>
            </div>
            </div>
        </div>)
}
const fantasyList = [
    {
        num: 1,
        img: "/fantasyimages/Ring.png",
        title:  "Властелин Колец. Хранители Кольца",
        author:  "Джон Рональд Толкин",
        desc:  "На хрупкие плечи хоббита Фродо Бэггинса, парня высотой в половину человеческого роста, ложится  тяжёлая ноша – спасение целого мира. Ему нужно уничтожить кольцо, которое разыскивает тёмный  властелин Мордора. Вместе со своими друзьями- полуросликами он покидает родную деревню, чтобы отправиться в опасное путешествие.",
        rate:  4.6,
        ratecount: "1.4K",
        price: "538 ₽",

    },
    {
        num: 2,
        img:"/fantasyimages/Narnia.png",
        title:  "Хроники Нарнии: начало истории. Четыре повести ",
        author:  "Джон Рональд Толкин",
        desc:  "Питер, Сьюзен, Эдмунд и Люси – дети, которым пришлось покинуть свой дом и переехать к другу семьи. Там совершенно случайно они находят проход в волшебную страну – Нарнию. Эта земля населена фантастическими существами и наполнена магией. Но ещё в ней есть Белая Колдунья, которая наслала на страну вечную зиму. Героев ждёт сражение с этой волшебницей.",
        rate:  4.5,
        ratecount: "121",
        price: "600",

    },
    {
        num: 3,
        img: "/fantasyimages/Harry.png",
        title:  "Гарри Поттер и философский камень",
        author:  "Роулинг Джоан",
        desc:  "Гарри Поттер – сирота, который живёт в чулане под лестницей. В день одиннадцатилетия мир мальчика переворачивается с ног на голову: оказывается, его родители были волшебниками и погибли от рук величайшего злодея эпохи. Сам мальчик тоже умеет колдовать и в этом году ему пора приступать к обучению в Школе Чародейства и Волшебства.",
        rate:  4.2,
        ratecount: "41K",
        price: "890 ₽",

    },
    {
        num: 4,
        img: "/fantasyimages/North.png",
        title:  "Темные начала. Книга 1. Северное сияние",
        author:  "Филип Пулман",
        desc:  "Двенадцатилетняя Лира выросла в удивительном мире, где живут ведьмы и бронированные медведи, а душа каждого человека может принимать форму животного – деймона. Однажды лучшего друга героини похищают, и Лира отправляется в опасное путешествие на Север. В нём она откроет множество тайн о собственном происхождении.",
        rate:  4.8,
        ratecount: "215",
        price: "800 ₽",

    },
    {
        num: 5,
        img: "/fantasyimages/Witcher.png",
        title:  "Ведьмак. Последнее желание",
        author:  "Анджей Сапковский",
        desc:  "Вымышленный мир Анджея Сапковского полон весьма противоречивых персонажей: принцессы в нём становятся разбойницами, горбуньи превращаются в красавиц и правят королями, эльфы нападают на людей, а главный герой зарабатывает на жизнь, убивая немыслимых чудовищ (да и то не всех).",
        rate:  4.6,
        ratecount: "5.7К",
        price: "600 ₽",

    },
    {
        num: 6,
        img: "/fantasyimages/Path.png",
        title:  "Архив Буресвета. Книга 1. Путь королей",
        author:  "Брендон Сандерсон",
        desc:  "У Вселенной, которая называется Космер, довольно необычная история: в незапамятные времена НЕЧТО было убито заговорщиками, а его сила разлетелась на шестнадцать разных Осколков. Они стали основой магии в новых мирах. Один из таких миров – Рошар. Сейчас в нём свирепствуют бури, которые сметают всё на своём пути. Но скоро придёт Вечный Шторм. Он принесёт с собой чудовищ из сказок и смерть всему живому. И одно лишь его ожидание меняет судьбы целых народов…",
        rate:  4.2,
        ratecount: "352",
        price: "1275 ₽",

    },
    {
        num: 7,
        img: "/fantasyimages/Thrones.png",
        title:  "Игра престолов",
        author:  "Джордж Р.Р. Мартин",
        desc:  "Великие дома, пропавшие наследники драконов, интриги, заговоры, тайны, предательства, и всё это на фоне контрастной погоды – такова реальность на континенте Вестерос. Десница короля погибает при странных обстоятельствах. Новое место предлагают давнему другу правителя, но как раз в это время потомки свергнутой династии планируют вернуть трон.",
        rate:  4.2,
        ratecount: "1.1K",
        price: "750 ₽",

    },
]



export default Njournal;