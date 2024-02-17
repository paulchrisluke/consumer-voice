import { StarIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';

export default function RatingHolder() {
  return (
    <div className="not-prose">
      <div className="pl-6 pr-4">
        <div className="flex items-center gap-3 font-primary">
          <h3 className="text-4xl font-medium">10.0</h3>
          <div>
            <p className="text-base font-medium text-black">Outstanding</p>
            <ul className="mt-1.5 flex items-center gap-1 text-[#F9D002]">
              <li>
                <StarIcon className="h-3 w-3 fill-current" />
              </li>
              <li>
                <StarIcon className="h-3 w-3 fill-current" />
              </li>
              <li>
                <StarIcon className="h-3 w-3 fill-current" />
              </li>
              <li>
                <StarIcon className="h-3 w-3 fill-current" />
              </li>
              <li>
                <StarIcon className="h-3 w-3 fill-current" />
              </li>
            </ul>
          </div>
        </div>
        <Link href="#" className="btn-primary mt-4 uppercase">
          Shop Now
        </Link>
        <p className="mt-3.5 text-sm">
          <a href="#">50% Off All Mattresses</a>
        </p>
      </div>
    </div>
  );
}
