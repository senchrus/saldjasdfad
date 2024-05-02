import "./index.css";
import Header from "./Header";
import Clock from  "./images/Time_light.svg"
function Sales(){
    return(
        <>
        <Header/>
        <div className="p-[20px]">
        <p className='text-[35px] text-white pl-[2%] font-Black pt-32 '>Акции и скидки на книги</p>
        <div>
            <SalesBlock title = "Книжный бум! -30% на всё* 25 апреля с 12:00 до 21:00" desc="Скидка 30% на всё* только для авторизованных пользователей"
            className="bg-light-blue"/>
        </div>
        </div>
        </>
    )
}
function SalesBlock({img,title,desc,className}) {
    return (
        <div className='relative w-full h-full pt-8 '>
            <div className={'w-full h-[200px]   rounded-xl flex   flex flex-row gap-10  ' + (className ? ' ' + className : '')}>
                    <div className="w-[40%] h-full flex justify-center items-center pl-[15px] ">
                    <img alt="" src="./salesimage/30onAll.png" className=" "/>
                    </div>
                <div className="flex flex-col  align-top pt-[20px] w-[80%]">
                    <p className='text-2xl font-Semibold  text-Black'>{title}</p>
                    <p className='text-lg font-Regular text-Black'>{desc}</p>
                </div>
                <div className="flex justify-center items-center p-[10px]">
                    <div className="  bg-SaleEnd w-[300px] h-full rounded-2xl flex flex-col  flex items-center">
                        <div className="flex gap-[10px] justify-center items-center font-Regular text-xl align-top ">
                            <img src={Clock} alt="" />
                            <p>До окончания акции</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="flex justify-center items-center">CTTTTS</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );}
export default Sales