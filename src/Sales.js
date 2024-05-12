import "./index.css";
import Header from "./Header";
import Clock from  "./images/Time_light.svg";
import Footer from "./Footer";
function Sales(){
    return(
        <>
        <Header/>
        <div className="p-[20px]">
        <p className='text-[35px] text-white pl-[2%] font-Black pt-32 '>Акции и скидки на книги</p>
        <div>
            <SalesBlock title = "Книжный бум! -30% на всё* 25 апреля с 12:00 до 21:00" desc="Скидка 30% на всё* только для авторизованных пользователей"
            className="bg-light-blue" img = "/salesimage/30onAll.png"/>
            <SalesBlock title = "Волшебная корзина! Скидки до 30%" desc="Скидки до 30% на корзину по промокодам BIG20, BIG30"
            className="bg-N2" img = "/salesimage/30Cart.png"/>
            <SalesBlock title = "«Ярость» – эксклюзивно в нашем магазине" desc="«Ярость» – эксклюзивное издание с цветным обрезом"
            className="bg-N3" img = "/salesimage/Rage.png"/>
            <SalesBlock title = "«Link Click. Агент времени. Том 2» – эксклюзивно в нашем интернет-магазине" desc="Скидка 30% на всё* только для авторизованных пользователей"
            className="bg-N4" img = "/salesimage/Linkclick.png"/>
        </div>
        </div>
        <Footer/>
        </>
    )
}
function SalesBlock({img,title,desc,className}) {
    return (
        <div className='relative w-full h-full pt-8 '>
            <div className={'w-full h-[200px]   rounded-xl flex pt-[5px] pb-[5px] flex flex-row gap-10 ' + (className ? ' ' + className : '')}>
                    <div className="w-[40%] h-full flex justify-center items-center pl-[15px] ">
                    <img alt="" src={img} className=" "/>
                    </div>
                <div className="flex flex-col  align-top pt-[20px] w-[80%]">
                    <p className='text-2xl font-Semibold  text-Black'>{title}</p>
                    <p className='text-lg font-Regular text-Black'>{desc}</p>
                </div>
                <div className="flex justify-center items-center p-[10px] ">
                    <div className="  bg-SaleEnd w-[300px] h-full rounded-2xl flex flex-col  flex items-center relative ">
                        <div className="flex gap-[10px] justify-center items-center font-Regular text-xl align-top ">
                            <img src={Clock} alt="" />
                            <p>До окончания акции</p>
                        </div>
                        <div className="flex justify-center items-center p-[30px]">
                            <p className="flex justify-center items-center text-xl">0 д : 0 ч : 0 мин</p>
                        </div>
                        <div className="flex absolute bottom-0">
                            <button className='flex justify-center rounded-lg border-4 border-Zelya bg-Zelya text-3xl items-center z-10 w-[300px] '>
                                <p className='text-[#FFFFFF] font-Light '>Подробнее</p>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );}
export default Sales