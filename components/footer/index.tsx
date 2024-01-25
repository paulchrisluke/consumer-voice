import Logo from './logo';

export default function Footer() {
  return (
    <footer className="w-full bg-white px-5 py-7.5">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex w-full max-w-full items-start justify-between gap-12 sm:ml-auto sm:max-w-max sm:items-center">
          <ul className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-12">
            <li>
              <a
                href="#"
                className="text-[15px] leading-normal text-black transition-all hover:text-theme sm:font-semibold"
              >
                How We Rank
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] leading-normal text-black transition-all hover:text-theme sm:font-semibold"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] leading-normal text-black transition-all hover:text-theme sm:font-semibold"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] leading-normal text-black transition-all hover:text-theme sm:font-semibold"
              >
                Terms
              </a>
            </li>
          </ul>
          <a href="#" className=" flex w-fit">
            <Logo />
          </a>
        </div>
      </div>
    </footer>
  );
}
