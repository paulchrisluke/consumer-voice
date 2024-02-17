'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import { cn } from 'lib/utils';

export default function AdverDisclouser() {
  const [adver, setAdver] = useState(false);
  return (
    <div className="relative z-20 w-full text-[11px] text-dark sm:w-auto">
      <button
        className="flex items-center gap-2"
        onClick={() => setAdver(!adver)}
      >
        <span>Advertising Disclosure</span>
        <ChevronDownIcon
          className={cn(
            'h-3 w-3 transition-all',
            adver ? 'rotate-180' : 'rotate-0'
          )}
          strokeWidth={2}
        />
      </button>
      <div
        className={cn(
          'absolute left-0 top-full w-full transition-all duration-200 sm:left-auto sm:right-0 sm:w-96',
          adver
            ? 'pointer-events-auto visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        )}
      >
        <div className="rounded-xl bg-[#F6F6F6] p-6 text-sm leading-relaxed">
          <p className="mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quos quaerat magni amet dolorum assumenda consequatur. Expedita
            nostrum, laboriosam earum assumenda quaerat omnis nam iste delectus
            illum totam, consequuntur distinctio!
          </p>
          <button
            className="block w-full rounded-[14px] bg-theme/20 px-10 py-2.5 text-lg font-semibold uppercase text-theme"
            onClick={() => setAdver(false)}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
