import Image from 'next/image';

import placeholder from './preview_large_how-to-manage-remote-teams-using-project-management-software.jpg';

export default function Articles() {
  return (
    <section className="w-full pt-20">
      <div className="mx-auto w-full max-w-7xl px-5">
        <div className="mb-7.5 flex w-full  items-center justify-between gap-10">
          <h2 className="font-secondary text-[22px] font-bold leading-normal text-black">
            Articles
          </h2>
          <a
            href="#"
            className="flex items-center gap-2 text-[13px] font-semibold uppercase text-black transition-all hover:text-theme"
          >
            <span className="block h-1 w-1 rounded-full bg-theme"></span> See
            all
          </a>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="w-full">
            <a
              href="#"
              className="inline-block w-full overflow-hidden rounded-3xl transition-all duration-300 hover:brightness-90"
            >
              <Image
                src={placeholder}
                alt="article image"
                className="h-auto w-full object-cover"
              />
            </a>
            <div className="mt-6 w-full">
              <a
                href="#"
                className="mb-2.5 text-lg font-medium leading-normal text-black transition-all hover:text-theme sm:font-bold"
              >
                How to Manage Remote Teams Using Project Management Software
              </a>
              <p className="mt-3 text-[15px] font-normal leading-7 text-black">
                In today&lsquo;s modern world the existence of remote teams and
                workers is becoming more common, and as a manager this can be a
                challenging change from h...
              </p>
            </div>
          </div>
          <div className="w-full">
            <a
              href="#"
              className="inline-block w-full overflow-hidden rounded-3xl transition-all duration-300 hover:brightness-90"
            >
              <Image
                src={placeholder}
                alt="article image"
                className="h-auto w-full object-cover"
              />
            </a>
            <div className="mt-6 w-full">
              <a
                href="#"
                className="mb-2.5 text-lg font-medium leading-normal text-black transition-all hover:text-theme sm:font-bold"
              >
                How to Manage Remote Teams Using Project Management Software
              </a>
              <p className="mt-3 text-[15px] font-normal leading-7 text-black">
                In today&lsquo;s modern world the existence of remote teams and
                workers is becoming more common, and as a manager this can be a
                challenging change from h...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
