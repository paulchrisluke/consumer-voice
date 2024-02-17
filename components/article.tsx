import dayjs from 'dayjs';

import { cn } from 'lib/utils';

import Breadcrumbs from 'components/breadcrumbs';
import Sidebar from 'components/sidebar';

import AdverDisclouser from './adver-discoluser';

export interface Props extends Metadata {
  children: React.ReactNode;
  className?: string;
  sectionClasses?: string;
}

export default function Article(props: Props) {
  const {
    children,
    className,
    internalTitle,
    title,
    breadcrumbs,
    dateModified,
    sectionClasses
  } = props;

  return (
    <section className={cn('px-5 pt-5', sectionClasses)}>
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8 flex items-center justify-between gap-10">
          <div className="hidden sm:block">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </div>
          <AdverDisclouser />
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <article className="w-full md:max-w-[992px]">
            <header className="not-format mb-5">
              <h1 className="mb-4 text-[22px] font-extrabold leading-tight text-black md:text-[26px] lg:mb-3.5">
                {internalTitle || title}
              </h1>
              <div className="flex items-center justify-between dark:border-gray-700">
                <div className="text-sm">
                  <span>
                    Last Updated:{'  '}
                    <time
                      dateTime={dayjs(dateModified).format('MMMM D, YYYY')}
                      title={dayjs(dateModified).format('MMMM D, YYYY')}
                    >
                      {dayjs(dateModified).format('MMMM D, YYYY')}
                    </time>
                  </span>
                </div>
              </div>
            </header>
            <div
              className={cn(
                'prose prose-base max-w-none [--tw-prose-bullets:#000] marker:text-lg marker:leading-none prose-h3:mb-5 prose-h3:text-lg prose-h3:font-bold prose-p:mb-7 prose-a:font-medium prose-a:text-theme prose-a:underline prose-strong:font-bold prose-ul:space-y-0.5 prose-ul:pl-6 prose-li:before:pl-1.5 prose-li:before:content-[""] prose-img:rounded-2xl md:prose-ul:pl-12',
                className
              )}
            >
              {children}
            </div>
          </article>
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
