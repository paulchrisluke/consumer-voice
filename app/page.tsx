import ArticleCards from 'components/article-cards';
import FeaturedTopics from 'components/featured-topics';
import Hero from 'components/hero';
import TopReviews from 'components/top-reviews';
import WhyTrusted from 'components/why-trusted';

export const metadata: Metadata = {
  title: 'Home',
  datePublished: '1/1/2023',
  breadcrumbs: [{ name: 'Home', href: '/' }]
};

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedTopics />
      <TopReviews />
      <ArticleCards />
      <WhyTrusted />
    </main>
  );
}
