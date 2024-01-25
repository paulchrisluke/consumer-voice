'use client';

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { cn } from 'lib/utils';

import DogFoodDelivery from './dog-food-delivery';
import Logo from './footer-logo';

const barsClass = {
  default:
    "absolute left-0 top-[43%] h-2.5 w-6 -translate-y-1/2 before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-theme before:transition-[top,transform] before:duration-300 before:content-[''] after:top-[9px] after:absolute after:left-0 after:right-0  after:h-[3px] after:bg-theme after:transition-[top,transform] after:duration-300 after:content-['']",
  active: 'before:top-1.5 before:rotate-45 after:top-1.5 after:-rotate-45'
};

const dropdownData = [
  {
    title: 'Dog Food Delivery',
    icon: DogFoodDelivery,
    items: [
      { label: "The Farmer's Dog Review", url: '#' },
      { label: 'Nom Nom Review', url: '#' },
      { label: 'Ollie Review', url: '#' },
      { label: 'We Feed Raw Review', url: '#' },
      { label: 'Spot & Tango Review', url: '#' }
    ]
  },

  {
    title: 'Dog Food Delivery',
    icon: DogFoodDelivery,
    items: [
      { label: "The Farmer's Dog Review", url: '#' },
      { label: 'Nom Nom Review', url: '#' },
      { label: 'Ollie Review', url: '#' },
      { label: 'We Feed Raw Review', url: '#' },
      { label: 'Spot & Tango Review', url: '#' }
    ]
  },

  {
    title: 'Dog Food Delivery',
    icon: DogFoodDelivery,
    items: [
      { label: "The Farmer's Dog Review", url: '#' },
      { label: 'Nom Nom Review', url: '#' },
      { label: 'Ollie Review', url: '#' },
      { label: 'We Feed Raw Review', url: '#' },
      { label: 'Spot & Tango Review', url: '#' }
    ]
  },

  {
    title: 'Dog Food Delivery',
    icon: DogFoodDelivery,
    items: [
      { label: "The Farmer's Dog Review", url: '#' },
      { label: 'Nom Nom Review', url: '#' },
      { label: 'Ollie Review', url: '#' },
      { label: 'We Feed Raw Review', url: '#' },
      { label: 'Spot & Tango Review', url: '#' }
    ]
  },

  {
    title: 'Dog Food Delivery',
    icon: DogFoodDelivery,
    items: [
      { label: "The Farmer's Dog Review", url: '#' },
      { label: 'Nom Nom Review', url: '#' },
      { label: 'Ollie Review', url: '#' },
      { label: 'We Feed Raw Review', url: '#' },
      { label: 'Spot & Tango Review', url: '#' }
    ]
  },

  {
    title: 'Dog Food Delivery',
    icon: DogFoodDelivery,
    items: [
      { label: "The Farmer's Dog Review", url: '#' },
      { label: 'Nom Nom Review', url: '#' },
      { label: 'Ollie Review', url: '#' },
      { label: 'We Feed Raw Review', url: '#' },
      { label: 'Spot & Tango Review', url: '#' }
    ]
  },

  {
    title: 'Dog Food Delivery',
    icon: DogFoodDelivery,
    items: [
      { label: "The Farmer's Dog Review", url: '#' },
      { label: 'Nom Nom Review', url: '#' },
      { label: 'Ollie Review', url: '#' },
      { label: 'We Feed Raw Review', url: '#' },
      { label: 'Spot & Tango Review', url: '#' }
    ]
  },

  {
    title: 'Dog Food Delivery',
    icon: DogFoodDelivery,
    items: [
      { label: "The Farmer's Dog Review", url: '#' },
      { label: 'Nom Nom Review', url: '#' },
      { label: 'Ollie Review', url: '#' },
      { label: 'We Feed Raw Review', url: '#' },
      { label: 'Spot & Tango Review', url: '#' }
    ]
  },

  {
    title: 'Dog Food Delivery',
    icon: DogFoodDelivery,
    items: [
      { label: "The Farmer's Dog Review", url: '#' },
      { label: 'Nom Nom Review', url: '#' },
      { label: 'Ollie Review', url: '#' },
      { label: 'We Feed Raw Review', url: '#' },
      { label: 'Spot & Tango Review', url: '#' }
    ]
  }
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [renderHeights, setRenderHeights] = useState<Array<string>>([]);
  const dropdownRefs = useRef<Array<HTMLUListElement | null>>([]);

  useEffect(() => {
    // Initialize the dropdownRefs array with refs for each dropdown
    setRenderHeights(
      dropdownRefs.current.map((ref) => (ref ? `${ref.scrollHeight}px` : '0'))
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    const body = document.body;
    body.classList.toggle('h-screen', !openMenu);
    body.classList.toggle('overflow-hidden', !openMenu);
    return setOpenMenu(!openMenu);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="relative z-50 h-20">
      <div
        className={cn(
          'w-full bg-white transition-all',
          isSticky ? 'fixed top-0 z-50 py-3 shadow-md' : 'relative py-5'
        )}
      >
        {/* Navbar */}
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-10 px-5">
          {/* Topics Menu */}
          <div className="flex items-center gap-5">
            <button className="relative h-6 w-6" onClick={toggleMenu}>
              <span
                className={cn(
                  barsClass.default,
                  openMenu ? barsClass.active : null
                )}
              ></span>
            </button>
            <a
              href="#"
              className="text-[22px] font-bold leading-normal text-black"
            >
              Topics
            </a>
          </div>
          {/* Search */}
          <form
            action="/"
            className="relative hidden w-full max-w-[586px] md:block"
          >
            <div className="flex items-center rounded-full border border-[#eee] bg-white">
              <MagnifyingGlassIcon
                className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-theme"
                strokeWidth={3}
              />

              <input
                type="search"
                placeholder="Search"
                className="block w-full rounded-full border-none py-1.5 pl-14 pr-10 font-semibold text-black outline-none focus:outline-none focus:ring-theme"
              />
            </div>
            <button
              type="button"
              className="absolute right-6 top-1/2 -translate-y-1/2 transform text-[rgba(30,34,42,.5)]"
            >
              <XMarkIcon strokeWidth={2.5} className="h-6 w-6" />
            </button>
          </form>

          {/* Logo */}
          <a href="/" className="w-fit">
            <Logo />
          </a>
        </div>

        {/* <!------------nav mega menu------------> */}
        <div
          className={cn(
            'absolute left-0 right-0 top-full w-full overflow-auto bg-white transition-all duration-200 md:pt-5',
            openMenu
              ? 'pointer-events-auto visible h-screen opacity-100 sm:h-screen'
              : 'pointer-events-none invisible h-0 opacity-0 sm:h-screen'
          )}
        >
          <div className="mx-auto max-w-7xl bg-white px-5 pb-10 transition-all duration-500">
            <div className="hidden w-full gap-8 gap-x-10 gap-y-0 pb-20 sm:grid-cols-2 sm:gap-y-16 md:grid md:grid-cols-3 lg:grid-cols-4">
              {dropdownData.map((item, index) => (
                <div
                  className={cn(
                    'w-full translate-x-10 scale-75 opacity-0 duration-500',
                    {
                      'translate-x-0 scale-100 opacity-100': openMenu
                    }
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  key={index}
                >
                  <button className="flex w-full items-center justify-between gap-7 md:mb-5">
                    <div className="flex items-center gap-5 md:flex-col md:items-start md:gap-0 ">
                      <item.icon />
                      <h5 className="text-base font-bold leading-normal text-black md:text-lg ">
                        {item.title}
                      </h5>
                    </div>
                  </button>
                  <ul className="space-y-[3px]">
                    {item.items.map((navItem, index) => (
                      <li
                        key={index}
                        className={cn(
                          'translate-y-4 rotate-6 opacity-0 transition-all duration-1000',
                          { 'translate-y-0 rotate-0 opacity-100': openMenu }
                        )}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <Link
                          href={navItem.url}
                          className="text-sm font-normal leading-normal text-black transition-all duration-300 hover:text-theme"
                        >
                          {navItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="space-y-3 md:hidden">
              <form
                action="/"
                className="relative mx-auto !mt-6 mb-10 block w-full md:hidden"
              >
                <div className="flex items-center rounded-full border border-[#eee] bg-white">
                  <MagnifyingGlassIcon
                    className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-theme"
                    strokeWidth={3}
                  />

                  <input
                    type="search"
                    placeholder="Search"
                    className="block w-full rounded-full border-none py-1.5 pl-14 pr-10 font-semibold text-black outline-none focus:outline-none focus:ring-theme"
                  />
                </div>
                <button
                  type="button"
                  className="absolute right-6 top-1/2 -translate-y-1/2 transform text-[rgba(30,34,42,.5)]"
                >
                  <XMarkIcon strokeWidth={2.5} className="h-6 w-6" />
                </button>
              </form>

              {dropdownData.map((item, index) => (
                <div key={index}>
                  <button
                    className="flex w-full items-center justify-between gap-7 md:mb-5"
                    onClick={() => toggleDropdown(index)}
                  >
                    <div className="flex items-center gap-5 md:flex-col md:items-start md:gap-0 ">
                      <item.icon />
                      <h5 className="text-base font-bold leading-normal text-black md:text-lg ">
                        {item.title}
                      </h5>
                    </div>
                    <ChevronDownIcon
                      className={cn(
                        'ml-auto block h-5 w-5 transition-all',
                        openDropdown === index
                          ? 'rotate-180 text-theme'
                          : 'rotate-0'
                      )}
                      strokeWidth={2}
                    />
                  </button>
                  <ul
                    ref={(ref) => (dropdownRefs.current[index] = ref)}
                    style={{
                      height:
                        openDropdown === index ? renderHeights[index] : '0'
                    }}
                    className="transition-height mt-2 space-y-2 overflow-hidden pl-[66px] duration-300"
                  >
                    {item.items.map((navItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={navItem.url}
                          className="block text-sm font-normal leading-normal text-black transition-all duration-300 hover:text-theme"
                        >
                          {navItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <button className="ml-auto flex w-fit text-[15px] font-bold leading-normal text-black">
              More Guides
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
