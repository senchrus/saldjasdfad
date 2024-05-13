import "./index.css";
import Header from "./Header";
import Author from "./images/Author.svg";
import Rating from "./images/Rating.svg";
import Footer from "./Footer";


export default function Books(){
    return(
        <>
        <Header/>
        <div className='px-[5%]'>
            <p className='text-[50px] text-white pl-[2%] font-Black pt-16'>Книги</p>
            <div className="flex">
            {/* {fantasyList.map((elem,i)=> {return <ListElem num = {elem.num} img = {elem.img} title = {elem.title} author = {elem.author} desc = {elem.desc} rate = {elem.rate} ratecount = {elem.ratecount} price = {elem.price} key = {i}/>})} */}
            <div className='flex flex-col '>
                <div className='grid grid-cols-4 gap-4'>
                    <ListElem/>
                    <ListElem/>
                    <ListElem/>
                    <ListElem/>
                    <ListElem/>
                    <ListElem/>
                    <ListElem/>
                    <ListElem/>
                    <ListElem/>
                    <ListElem/>
                    <ListElem/>
                    <ListElem/>
                </div>
        </div>
            </div>
        </div>
        <Footer/>
        </>
    )
} 
function ListElem(){
    return(
    <div className='flex '>
            <div className='flex  flex-col gap-[5px] items-center '>
                <img src="/fantasyimages/Ring.png" alt='' className='h-[100%] w-[50%]  '/>
                <div className="items-start">
                    <p className='text-white font-Black text-xl  '>Властелин Колец. Хранители Кольца</p>
                    <div className='flex gap-4 '>
                        <p className='text-white font-Light text-sm '>Джон Рональд Толкин</p>
                    </div>
                    <div className='flex text-white font-Light text-sm items-center gap-4'>
                            <div className="flex items-center">
                            <img src={Rating} alt=''/>
                            <p>4.6</p>
                            </div>
                            <div className='text-[#BABABA] font-Light text-xs '>
                                <p>ОЦЕНОК 41K</p>
                            </div>
                    </div>
                    <p className='text-white text-lg font-Black '>538 ₽</p> 
                </div>
                    <div className="flex items-center">
                    <button className='flex items-center  px-[60px] py-[10px]  bg-[#62749E] rounded-lg text-lg z-10 '>
                        <p className='text-white font-Light '>В корзину</p> 
                    </button>
               
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