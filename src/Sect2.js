import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import uprav from "./images/uprav.png";
import "./index.css";
import './App.css';


function Sect2 ()  {
  return (
        <div className='bg-Black'>
      <Swiper id='sliderMain' navigation={true} modules={[Navigation]} noSwipingSelector className="mySwiper ">
        <SwiperSlide>
            <img alt='' src={uprav} className='w-[15%] '/>
            <p className='text-Zagtext text-white'>КАК УПРАВЛЯТЬ РАБАМИ</p>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
  );
};
export default Sect2;