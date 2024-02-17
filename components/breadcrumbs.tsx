import Link from 'next/link';

export interface Props {
  breadcrumbs: Breadcrumb[];
}

export default function ArticleBreadcrumbs(props: Props) {
  if (!props.breadcrumbs.length) {
    return null;
  }

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 text-base md:space-x-4">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-black/50 transition-all hover:text-black"
          >
            Main
          </Link>
        </li>
        {props.breadcrumbs.map((breadcrumb, i) => {
          if (props.breadcrumbs.length === i + 1) {
            return (
              <li key={breadcrumb.href} aria-current="page">
                <div className="flex items-center">
                  <span className="block h-1 w-1 rounded-full bg-black/50"></span>
                  <span className="dark:text-primary-500 ml-2 text-xs text-black/50 transition-all md:ml-4">
                    {breadcrumb.name}
                  </span>
                </div>
              </li>
            );
          }

          return (
            <li key={breadcrumb.href}>
              <div className="flex items-center">
                <span className="block h-1 w-1 rounded-full bg-black/50"></span>
                <Link
                  href={breadcrumb.href}
                  className="ml-2 text-xs text-black/50 transition-all hover:text-black md:ml-4"
                >
                  {breadcrumb.name}
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
