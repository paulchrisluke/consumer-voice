'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import bottomShape from './bottom-shape.png';
import dreamcloud from './logo_dreamcloud-sleep.png';
import topShape from './top-shape.png';

export default function Sidebar() {
  const [distanceFromTop, setDistanceFromTop] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const top = elementRef.current.offsetTop;
        setDistanceFromTop(top);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <aside
      className="hidden w-full space-y-8 pl-4 md:max-w-[307px] md:shrink-0 lg:sticky lg:block"
      style={{ top: -(distanceFromTop - 50) + 'px' }}
    >
      <div>
        <Image
          src={dreamcloud}
          alt="Dream Cloud"
          className="h-auto w-full object-contain"
        />

        <div className="relative z-0 mt-8 overflow-hidden rounded-[20px] bg-[#eef1f3] p-7.5">
          <Link href="#" className="mb-2 block w-fit text-sm text-theme">
            50% Off All Mattresses
          </Link>
          <p className="text-sm leading-relaxed">
            ConsumerVoice.org readers receive 50% off all mattresses on their
            DreamCloud Sleep mattress purchase.
          </p>
          <Image
            src={topShape}
            alt="Top Shape"
            className="pointer-events-none absolute -right-5 -top-1.5 -z-10"
          />
          <Image
            src={bottomShape}
            alt="Bottom Shape"
            className="pointer-events-none absolute -bottom-1.5 -left-2.5 -z-10"
          />
        </div>

        <div className="mb-12 pb-0.5 pt-10" ref={elementRef}>
          <h2 className="mb-6 text-[22px] font-bold text-black">Quick Links</h2>
          <ul className="pl-8">
            <li>
              <a
                className='active relative inline-block py-1.5 text-sm font-semibold transition-all before:absolute before:-left-4 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-transparent before:transition-all before:content-[""] [&.active]:text-theme [&.active]:before:bg-theme'
                href="#chapter-box01"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                className='relative inline-block py-1.5 text-sm font-semibold transition-all before:absolute before:-left-4 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-transparent before:transition-all before:content-[""] [&.active]:text-theme [&.active]:before:bg-theme'
                href="#chapter-box02"
              >
                How is it Rated?
              </a>
            </li>
            <li>
              <a
                className='relative inline-block py-1.5 text-sm font-semibold transition-all before:absolute before:-left-4 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-transparent before:transition-all before:content-[""] [&.active]:text-theme [&.active]:before:bg-theme'
                href="#chapter-box03"
              >
                Product Features
              </a>
            </li>
            <li>
              <a
                className='relative inline-block py-1.5 text-sm font-semibold transition-all before:absolute before:-left-4 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-transparent before:transition-all before:content-[""] [&.active]:text-theme [&.active]:before:bg-theme'
                href="#chapter-box04"
              >
                Foundations
              </a>
            </li>
            <li>
              <a
                className='relative inline-block py-1.5 text-sm font-semibold transition-all before:absolute before:-left-4 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-transparent before:transition-all before:content-[""] [&.active]:text-theme [&.active]:before:bg-theme'
                href="#chapter-box05"
              >
                DreamCloud Cost
              </a>
            </li>
            <li>
              <a
                className='relative inline-block py-1.5 text-sm font-semibold transition-all before:absolute before:-left-4 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-transparent before:transition-all before:content-[""] [&.active]:text-theme [&.active]:before:bg-theme'
                href="#chapter-box06"
              >
                DreamCloud Comparison
              </a>
            </li>
            <li>
              <a
                className='relative inline-block py-1.5 text-sm font-semibold transition-all before:absolute before:-left-4 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-transparent before:transition-all before:content-[""] [&.active]:text-theme [&.active]:before:bg-theme'
                href="#chapter-box07"
              >
                Company Information
              </a>
            </li>
            <li>
              <a
                className='relative inline-block py-1.5 text-sm font-semibold transition-all before:absolute before:-left-4 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-transparent before:transition-all before:content-[""] [&.active]:text-theme [&.active]:before:bg-theme'
                href="#chapter-box08"
              >
                Bottom Line
              </a>
            </li>
            <li>
              <a
                className='relative inline-block py-1.5 text-sm font-semibold transition-all before:absolute before:-left-4 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-transparent before:transition-all before:content-[""] [&.active]:text-theme [&.active]:before:bg-theme'
                href="#"
              >
                Coupons
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-[14px] bg-[#fafafa] px-2.5 pb-2.5 pt-5">
          <h3 className="mb-6 text-base font-semibold">Top 5 Mattresses</h3>
          <div className="space-y-3.5">
            <div className="flex items-center gap-1 rounded-md bg-white p-1.5">
              <Image
                src={dreamcloud}
                alt="logo"
                className="h-auto w-full object-contain"
              />
              <p className="shrink-0 px-4 text-[22px] font-semibold">9.8</p>
            </div>

            <div className="flex items-center gap-1 rounded-md bg-white p-1.5">
              <Image
                src={dreamcloud}
                alt="logo"
                className="h-auto w-full object-contain"
              />
              <p className="shrink-0 px-4 text-[22px] font-semibold">9.8</p>
            </div>

            <div className="flex items-center gap-1 rounded-md bg-white p-1.5">
              <Image
                src={dreamcloud}
                alt="logo"
                className="h-auto w-full object-contain"
              />
              <p className="shrink-0 px-4 text-[22px] font-semibold">9.8</p>
            </div>

            <div className="flex items-center gap-1 rounded-md bg-white p-1.5">
              <Image
                src={dreamcloud}
                alt="logo"
                className="h-auto w-full object-contain"
              />
              <p className="shrink-0 px-4 text-[22px] font-semibold">9.8</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
