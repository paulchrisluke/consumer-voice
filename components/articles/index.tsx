import Image from 'next/image';

import placeholder from './preview_large_how-to-manage-remote-teams-using-project-management-software.jpg';

const articleData = [
  {
    thumbnail: placeholder,
    title: 'How to Manage Remote Teams Using Project Management Software',
    description:
      'In today&lsquo;s modern world the existence of remote teams and workers is becoming more common, and as a manager this can be a challenging change from h can be a challenging change from hcan be a challenging change ger this can be a challenging change from h can be a challenging change from hcan be a challenging chan from h',
    url: '#'
  },
  {
    thumbnail: placeholder,
    title: 'How to Manage Remote Teams Using Project Management Software',
    description:
      'In today&lsquo;s modern world the existence of remote teams and workers is becoming more common, and as a manager this ger this can be a challenging change from h can be a challenging change from hcan be a challenging chan can be a challenging change from h can be a challenging change from hcan be a challenging change from h',
    url: '#'
  }
];

export default function Articles() {
  return (
    <section className="mb-10 w-full pt-20">
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
          {articleData.map((item, index) => (
            <div className="w-full" key={index}>
              <a
                href={item.url}
                className="inline-block w-full overflow-hidden rounded-3xl transition-all duration-300 hover:brightness-90"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-auto w-full object-cover"
                />
              </a>
              <div className="mt-6 w-full">
                <a
                  href={item.url}
                  className="mb-2.5 text-lg font-medium leading-normal text-black transition-all hover:text-theme sm:font-bold"
                >
                  {item.title}
                </a>
                <p className="mt-3 line-clamp-3 text-ellipsis text-[15px] font-normal leading-7 text-black">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
