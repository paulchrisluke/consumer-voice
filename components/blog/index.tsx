import Link from 'next/link';

export default function Blog() {
  return (
    <section className="">
      <ol className="breadcrumbs">
        <li>
          <Link href="/">Main</Link>
        </li>
      </ol>
    </section>
  );
}
