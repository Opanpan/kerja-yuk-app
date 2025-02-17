import React, { useRef } from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cards = [
  {
    id: 1,
    name: 'Jeki',
    message:
      'Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet',
  },
  {
    id: 2,
    name: 'Udin',
    message:
      'Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet',
  },
  {
    id: 3,
    name: 'Asep',
    message:
      'Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet',
  },
  {
    id: 4,
    name: 'Budi',
    message:
      'Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet Kalimat 1 - Lorem Ipsum dolor sit amet',
  },
];

export default function News() {
  const swiperRef = useRef(null);

  return (
    <div className='relative mt-5'>
      <h1 className='font-bold mb-4'>PCS News</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ el: '.custom-pagination', clickable: true }}
        className='mySwiper'
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className='p-3'>
              <div className='shadow-lg p-5 rounded-[10px]'>
                <div className='flex justify-between'>
                  <div className='flex items-center'>
                    <img
                      className='w-11 h-11 rounded-full mr-3'
                      src='/profile-picture.png'
                      alt='profile-picture'
                    />
                    <h1 className='font-bold text-red-600'>{card.name}</h1>
                  </div>

                  <div>
                    <p className='font-light text-sm text-right'>Senin</p>
                    <p className='font-light text-sm text-right'>
                      30 Juni 2021
                    </p>
                  </div>
                </div>

                <div className='mt-3 font-light'>
                  <p>{card?.message}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='custom-pagination flex justify-center mt-4 space-x-2'></div>
    </div>
  );
}
