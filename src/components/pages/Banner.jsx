// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../App1.css'

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'backgroundImage':
                            'url(https://i.ibb.co/B45s4xj/pexels-tobiasbjorkli-2104152.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Dream Vacation Destination
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Travel Destinations Available Worldwide
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Vacationing in Asia offers an unforgettable experience filled with diverse cultures, stunning landscapes, and rich history. From exploring ancient temples in Cambodia and Myanmar to indulging in mouthwatering street food in Thailand and Vietnam, Asia caters to a wide range of interests and preferences.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title " data-swiper-parallax="-300">
                        Time to travel
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Travel Destinations Available Worldwide
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Exploring new destinations often involves walking, hiking, swimming, or engaging in other physical activities. This boosts your cardiovascular health, enhances muscle strength, and contributes to overall fitness.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Vacation around the Nature
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Experiencing diverse cultures, traditions, and lifestyles
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Travel to provide opportunities for personal growth, self-discovery, and emotional rejuvenation. It allows you to step outside your comfort zone, gain new perspectives, and cultivate a sense of fulfillment and happiness.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;