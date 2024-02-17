import { StarIcon } from '@heroicons/react/24/outline';

import Image from 'next/image';
import Link from 'next/link';

import cloud from './logo_dreamcloud-sleep.png';

export default function DreamCloud() {
  return (
    <div className="not-prose">
      <div className="grid w-full max-w-[300px] grid-cols-1 rounded-md bg-[#fafaf9] px-5 py-5 sm:max-w-[584px] sm:grid-cols-12 sm:px-8">
        <div className="relative z-0 mb-6 flex items-center justify-center overflow-hidden rounded-md bg-white px-5 py-12 sm:col-span-4 sm:mb-0 sm:py-9">
          <Image
            src={cloud}
            alt="Dream Cloud Logo"
            className="h-auto w-28 object-contain"
          />
          <p className="absolute bottom-0 left-0 flex h-[30px] w-9 items-center justify-center rounded-tr-3xl bg-[#fafaf9] text-sm font-semibold">
            10.0
          </p>
        </div>
        <div className="sm:col-span-8 sm:pl-10">
          <h2 className="text-[22px] font-medium">DreamCloud Sleep</h2>
          <ul className="mb-1 flex items-center gap-1 text-theme">
            <li>
              <StarIcon className="h-7 w-7 fill-current" />
            </li>
            <li>
              <StarIcon className="h-7 w-7 fill-current" />
            </li>
            <li>
              <StarIcon className="h-7 w-7 fill-current" />
            </li>
            <li>
              <StarIcon className="h-7 w-7 fill-current" />
            </li>
            <li>
              <StarIcon className="h-7 w-7 fill-current" />
            </li>
          </ul>
          <p className="mb-2.5 text-sm">3,570 reviews</p>
          <Link
            href="#"
            className="btn-primary block w-full rounded-xl text-center"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
