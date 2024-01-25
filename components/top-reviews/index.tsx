import Image from 'next/image';

import {
  default as articleImage,
  default as smallImgTwo
} from './meal-delivery-services.jpg';
import smallImgOne from './pet-insurance.jpg';

export default function TopReviews() {
  return (
    <section className="w-full pt-20">
      <div className="mx-auto w-full max-w-7xl px-5">
        <div className="mb-7.5 flex w-full  items-center justify-between gap-10">
          <h2 className="font-secondary text-[22px] font-bold leading-normal text-black">
            All Products
          </h2>
          <a
            href="#"
            className="flex items-center gap-2 text-[13px] font-semibold uppercase text-black transition-all hover:text-theme"
          >
            <span className="block h-1 w-1 rounded-full bg-theme"></span> See
            all
          </a>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="w-full md:col-span-2">
            <a
              href="#"
              className="relative inline-block w-full overflow-hidden rounded-3xl"
            >
              <Image
                src={articleImage}
                alt="Article image alt"
                className="h-auto w-full object-cover hover:brightness-90"
              />
              <div className="pointer-events-none absolute bottom-0 left-0 w-fit rounded-tr-[50px] bg-[rgba(242,242,242,.95)] px-10 py-[18px] ">
                <h6 className="font-secondary text-xl font-medium text-black">
                  Electronics
                </h6>
                <p className="mt-1.5 text-base font-normal text-black/60">
                  Wireless Earbuds
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="#" className="w-full">
              <Image
                src={smallImgOne}
                alt="image for small card"
                className="h-auto w-full rounded-3xl object-cover transition-all hover:brightness-90"
              />
            </a>
            <div className="mt-4 w-full">
              <a
                href="#"
                className="font-secondary text-[17px] font-medium leading-normal text-black transition-all hover:text-theme "
              >
                Home & Kitchen
              </a>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-0">
                <li>
                  <a
                    href="#"
                    className="mt-1 block w-fit text-[15px] font-normal leading-normal text-black/50 transition-all hover:text-black"
                  >
                    Pool Cleaners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative mt-1 block w-fit text-[15px] font-normal leading-normal text-black/50 transition-all before:absolute before:-left-3 before:top-1/2 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-current before:content-[''] hover:text-black"
                  >
                    Embroidery Machines
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="#" className="w-full">
              <Image
                src={smallImgTwo}
                alt="image for small card"
                className="h-auto w-full rounded-3xl object-cover transition-all hover:brightness-90"
              />
            </a>
            <div className="mt-4 w-full">
              <a
                href="#"
                className="font-secondary text-[17px] font-medium leading-normal text-black transition-all hover:text-theme "
              >
                Baby
              </a>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-0">
                <li>
                  <a
                    href="#"
                    className="mt-1 block w-fit text-[15px] font-normal leading-normal text-black/50 transition-all hover:text-black"
                  >
                    Bussinets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative mt-1 block w-fit text-[15px] font-normal leading-normal text-black/50 transition-all before:absolute before:-left-3 before:top-1/2 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-current before:content-[''] hover:text-black"
                  >
                    Baby Monitors
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="#" className="w-full">
              <Image
                src={smallImgTwo}
                alt="image for small card"
                className="h-auto w-full rounded-3xl object-cover transition-all hover:brightness-90"
              />
            </a>
            <div className="mt-4 w-full">
              <a
                href="#"
                className="font-secondary text-[17px] font-medium leading-normal text-black transition-all hover:text-theme "
              >
                Beauty & Health
              </a>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-0">
                <li>
                  <a
                    href="#"
                    className="mt-1 block w-fit text-[15px] font-normal leading-normal text-black/50 transition-all hover:text-black"
                  >
                    Bussinets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative mt-1 block w-fit text-[15px] font-normal leading-normal text-black/50 transition-all before:absolute before:-left-3 before:top-1/2 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-current before:content-[''] hover:text-black"
                  >
                    Baby Monitors
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="#" className="w-full">
              <Image
                src={smallImgOne}
                alt="image for small card"
                className="h-auto w-full rounded-3xl object-cover transition-all hover:brightness-90"
              />
            </a>
            <div className="mt-4 w-full">
              <a
                href="#"
                className="font-secondary text-[17px] font-medium leading-normal text-black transition-all hover:text-theme "
              >
                Automotive
              </a>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-0">
                <li>
                  <a
                    href="#"
                    className="mt-1 block w-fit text-[15px] font-normal leading-normal text-black/50 transition-all hover:text-black"
                  >
                    Bussinets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative mt-1 block w-fit text-[15px] font-normal leading-normal text-black/50 transition-all before:absolute before:-left-3 before:top-1/2 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-current before:content-[''] hover:text-black"
                  >
                    Baby Monitors
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="#" className="w-full">
              <Image
                src={smallImgTwo}
                alt="image for small card"
                className="h-auto w-full rounded-3xl object-cover transition-all hover:brightness-90"
              />
            </a>
            <div className="mt-4 w-full">
              <a
                href="#"
                className="font-secondary text-[17px] font-medium leading-normal text-black transition-all hover:text-theme "
              >
                Pets
              </a>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-0">
                <li>
                  <a
                    href="#"
                    className="mt-1 block w-fit text-[15px] font-normal leading-normal text-black/50 transition-all hover:text-black"
                  >
                    Bussinets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative mt-1 block w-fit text-[15px] font-normal leading-normal text-black/50 transition-all before:absolute before:-left-3 before:top-1/2 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-current before:content-[''] hover:text-black"
                  >
                    Baby Monitors
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
