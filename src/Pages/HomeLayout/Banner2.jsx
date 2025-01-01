import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import image1 from '../../assets/home/slide1.jpg';
import image2 from '../../assets/home/slide2.jpg';
import image3 from '../../assets/home/slide3.jpg';
import image4 from '../../assets/home/slide4.jpg';
import image5 from '../../assets/home/slide5.jpg';
import SectionTitlee from '../../Component/SectionTitlee';


const Banner2 = () => {
  return (
    <div className="mt-10 mb-10">
<SectionTitlee subHeading={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'} ></SectionTitlee>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <img src={image1} alt="Slide 1" className="w-full h-auto" />
            <h3 className='text-3xl text-white uppercase text-center -mt-20'>salad</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Slide 2" className="w-full h-auto" />
            <h3 className='text-3xl text-white uppercase text-center -mt-20'>pizza</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Slide 3" className="w-full h-auto" />
            <h3 className='text-3xl text-white uppercase text-center -mt-20'>soup</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="Slide 4" className="w-full h-auto" />
            <h3 className='text-3xl text-white uppercase text-center -mt-20'>desserts</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="Slide 5" className="w-full h-auto" />
            <h3 className='text-3xl text-white uppercase text-center -mt-20'>salad</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner2;
