'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';

import DogFoodDelivery from './dog-food-delivery';

const featuredTopics = [
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  },
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  },
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  },
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  },
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  },
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  },
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  },
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  },
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  },
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  },
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  },
  {
    icon: DogFoodDelivery,
    title: 'Dog Food Delivery',
    href: '/'
  }
];

export default function FeaturedTopics() {
  return (
    <section className=" w-full overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-15">
        <div className="mb-9 w-full">
          <h2 className="text-left text-[22px] font-bold text-black">
            Featured Topics
          </h2>
        </div>
        <div className="relative">
          <Swiper
            slidesPerGroup={6}
            slidesPerView={'auto'}
            spaceBetween={24}
            modules={[Navigation]}
            navigation={{
              prevEl: '.feature-prev',
              nextEl: '.feature-next'
            }}
            className="!overflow-visible"
          >
            {featuredTopics.map((item, index) => (
              <SwiperSlide
                key={index}
                className="relative block !w-[102px] overflow-hidden rounded-[50px] bg-white shadow-primary hover:bg-theme-light"
              >
                <div className="px-3.5 pb-9 pt-4">
                  <div className="mx-auto mb-4  flex h-[76px] w-[76px] items-center justify-center  rounded-full border border-light-100 bg-white ">
                    <item.icon />
                  </div>
                  <h6 className="text-center text-xs font-semibold leading-4 text-black">
                    {item.title}
                  </h6>
                </div>
                <Link href={item.href} className="absolute inset-0 z-10" />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="feature-next absolute -right-14 top-1/2 z-20 flex h-12 w-9 -translate-y-1/2 items-center justify-center rounded-full transition-all hover:bg-theme-light disabled:pointer-events-none disabled:invisible disabled:opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <button className="feature-prev absolute -left-14 top-1/2 z-20 flex h-12 w-9 -translate-y-1/2 items-center justify-center rounded-full transition-all hover:bg-theme-light disabled:pointer-events-none disabled:invisible disabled:opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
