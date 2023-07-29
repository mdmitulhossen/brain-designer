import React from 'react';
// import Swiper core and required modules
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { imgData } from './imgData';


const Partners = () => {

    return (
        <div className='brainContainer mt-24'>
            <div>
                <div><h1 className='text-4xl font-bold text-center'>Technology Partners</h1></div>


                <div className=''>
                    <div className='ml-5'>
                        <Swiper
                            // install Swiper modules
                            modules={[Autoplay, Pagination,]}
                            breakpoints={
                                {
                                    0: {
                                        spaceBetween:10,
                                      slidesPerView:2,
                                    },
                                    460: {
                                        spaceBetween:10,
                                      slidesPerView:3,
                                    },
                                    768: {
                                        spaceBetween:10,
                                      slidesPerView:4,
                                    },
                                    1024: {
                                        spaceBetween:10,
                                      slidesPerView:5,
                                    }
                                }
                            }
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false
                            }}

                            pagination={{ clickable: true }}

                        >

                            {imgData.map((img, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <img className='' style={{
                                            height: 300,
                                        }} src={img} alt="" />
                                    </SwiperSlide>
                                )
                            })
                            }


                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Partners;