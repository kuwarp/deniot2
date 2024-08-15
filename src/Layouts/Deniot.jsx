import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import {scrollAnimation} from 'react-animate-on-scroll';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const images = [
    
    {
        id: 1,
        src: require('../assets/Images/carousels/1.webp'),
        alt: "1"
    },
    {
        id: 2,
        src: require('../assets/Images/carousels/1c.webp'),
        alt: "1c"
    },
    {
        id: 3,
        src: require('../assets/Images/carousels/1f.webp'),
        alt: "1f"
    },
    {
        id: 4,
        src: require('../assets/Images/carousels/1l.webp'),
        alt: "1l"
    },
    {
        id: 5,
        src: require('../assets/Images/carousels/1t.webp'),
        alt: "1t"
    },
    {
        id: 6,
        src: require('../assets/Images/carousels/2c.webp'),
        alt: "2c"
    },
    {
        id: 7,
        src: require('../assets/Images/carousels/2e.webp'),
        alt: "2e"
    },
    {
        id: 8,
        src: require('../assets/Images/carousels/2ca.webp'),
        alt: "2ca"
    },
    {
        id: 9,
        src: require('../assets/Images/carousels/2r.webp'),
        alt: "2r"
    },
    {
        id: 10,
        src: require('../assets/Images/carousels/2ru.webp'),
        alt: "2ru"
    },
    {
        id: 11,
        src: require('../assets/Images/carousels/2ru.webp'),
        alt: "2ru"
    }
];

export default function Deniot() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState(
   images.map((_, index) => `Slide ${index + 1}`)
  );

  

  

  return (
    <div className='mt-5 sw' >
        
    <div className='scroll-section container'>
        <scrollAnimation animateIn='fadeIn'>
     <h2 className="section-title ">Jean-Louis Deniot</h2>
     </scrollAnimation>
     </div>
      <Swiper
        modules={[Virtual, Navigation, Pagination,Scrollbar]}
        dir='rtl'
        onSwiper={setSwiperRef}
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={10}
         virtual
         scrollbar={{
            hide: true,
          }}
          className='mySwiper'
         >
        {images.map((slideContent, index) => (
          <SwiperSlide key={slideContent} className='border-5 '  virtualIndex={index}>
           
           <img
                       className="w-100   "
                        src={slideContent.src}
                        alt={slideContent.alt}
                    />
                     </SwiperSlide>
        ))}
      </Swiper>



      <Swiper
        modules={[Virtual, Navigation, Pagination,Scrollbar]}
        dir='ltr'
        onSwiper={setSwiperRef}
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={10}
        onScroll={true}
         virtual
         scrollbar={{
            hide: true,
          }}
          className='mySwiper '
         >
        {images.map((slideContent, index) => (
          <SwiperSlide key={slideContent} className='border-5 '  virtualIndex={index}>
           
           <img
                        className="w-100    "
                        src={slideContent.src}
                        alt={slideContent.alt}
                    />
                     </SwiperSlide>
        ))}
      </Swiper>
         </div>
  );
}
