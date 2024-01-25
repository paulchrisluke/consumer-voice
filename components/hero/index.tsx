import Image from 'next/image';

import hero from './hero.png';

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 md:px-5">
      <div className="flex w-full items-center justify-between gap-6 rounded-[30px] bg-theme-100 md:pt-[30px] ">
        <div className="w-full max-w-[770px] px-6 py-7 md:pb-8 md:pl-14 lg:pl-24">
          <h1 className="mb-3.5 text-[23px] font-bold leading-normal text-theme md:mb-2 md:text-[26px]">
            The Best Products in Every Category
          </h1>
          <p className="mb-6 text-base font-normal leading-normal md:mb-5 md:text-lg">
            <span className="font-semibold">Rating</span> and{' '}
            <strong className="font-bold">Reviews</strong> of the best products
          </p>
          <form className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3.5"
              stroke="#fb6d3a"
              className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="search"
              placeholder="Search a Topic"
              id="search2"
              className="w-full rounded-full border border-none border-white bg-white py-2 pl-14 pr-10 font-semibold text-black outline-none md:py-3"
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 transform text-[rgba(30,34,42,.5)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="mt-auto hidden h-full w-full max-w-[400px] md:flex lg:max-w-[500px]">
          <Image
            src={hero}
            alt="Hero illustration"
            className="-mt-8 h-full w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
