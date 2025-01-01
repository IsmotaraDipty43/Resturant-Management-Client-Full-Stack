import React, { useEffect, useState } from 'react';
import SectionTitlee from '../../Component/SectionTitlee';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import rattingimg from '../../assets/home/comma.png'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// // import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews,setreview] = useState([])
    useEffect(()=>{
        fetch('/review.json')
        .then(res=>res.json())
        .then(data=>setreview(data))
        
    },[])
    return (
        <section className='mt-10-mb-10 my-20'>
            <SectionTitlee subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}></SectionTitlee>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
      
{
    reviews.map(review=>  <SwiperSlide key={review._id}>
        <div className='m-24 flex flex-col items-center  space-y-3'> 
        <Rating 
        className=''
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    <img src={rattingimg} className='h-24' alt="" />
            <p className='text-lg'>{review.details}</p>
            <h3 className='text-3xl text-orange-400 text-semibold text-center'>{review.name}</h3>
        </div>




    </SwiperSlide>)
}
      </Swiper>
        </section>
    );
};

export default Testimonials;