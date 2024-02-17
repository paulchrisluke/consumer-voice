import Image from 'next/image';
import Link from 'next/link';

import Article from 'components/article';
import ComparisionTable from 'components/comparision-table';
import DreamCloud from 'components/dream-cloud';
import HowRated from 'components/how-rated';
import ProsConsTable from 'components/pros-cons-table';
import RatingHolder from 'components/rating-holder';

import dreamcloudimg from './dreamcloud.jpg';

const proscons = [
  {
    pros: '365 Day Trial Period',
    cons: 'Numerous BBB Complaints'
  },
  {
    pros: 'Affordable Price Point',
    cons: 'Only One Firmness Level'
  },
  {
    pros: 'Lightweight Mattress',
    cons: 'Inconsistent Customer Service'
  },
  {
    pros: 'High Degree of Motion Isolation',
    cons: 'Requires Extra Deep Sheets'
  },
  {
    pros: 'Cashmere Tight Top or Euro Top Design'
  },
  {
    pros: 'Very Breathable'
  },
  {
    pros: 'Sleeps Cool'
  },
  {
    pros: 'Lifetime Warranty'
  }
];

export const metadata: Metadata = {
  tags: ['General'],
  authors: [{ name: 'Consumer Voice' }],
  datePublished: '2024-02-17',
  dateModified: '2024-02-17',
  title: 'All About The Silk Screening PCB Process',
  internalTitle: 'DreamCloud Sleep Review',
  description:
    'Want to learn about Silk Screening PCB? This informative guide will teach you everything you need to know about the process and its importance in electronics manufacturing.',
  keywords: 'silk screening pcb',
  breadcrumbs: [
    {
      name: 'Mattresses',
      href: '#'
    },
    {
      name: 'DreamCloud Sleep',
      href: '#'
    }
  ]
};

export default function Page() {
  return (
    <Article {...metadata}>
      <div className="chapter-content" id="chapter-01">
        <div className="flex flex-col items-start md:flex-row">
          <ul>
            <li>
              <strong>50% Off All Mattresses</strong>
            </li>
            <li>Firmness: Medium-Firm Hybrid model</li>
            <li>Height: 12&ldquo; standard or 13&ldquo; premier</li>
            <li>
              Support: Foam layers ensure proper spinal alignment with adaptive
              support
            </li>
            <li>
              Materials: Contouring gel memory foam + wrapped coils for extra
              edge support
            </li>
            <li>Trial Period: 365-night trial</li>
            <li>Warranty: Lifetime warranty</li>
            <li>Shipping: Includes free shipping &amp; free returns</li>
          </ul>
          <RatingHolder />
        </div>
        <h3 className="chapter-title">Overview</h3>
        <p>
          DreamCloud is run by the parent company of two different mattress
          brands, the Nectar and DreamCloud Mattress. While the Nectar was their
          initial product in 2016, the company decided to upgrade to a luxury
          option in 2018 which they simply named DreamCloud, followed by an
          upgraded DreamCloud Premier, and finally by the addition of the
          DreamCloud Premier Rest. This product is a hybrid model that combines
          the use of their proprietary foam blend with the use of innerspring
          coils in order to bring to the consumer a more traditional and
          supportive feel.&nbsp;
        </p>
        <p>
          As with many direct-to-consumer businesses, DreamCloud is sold
          primarily online and unlike its sibling the Nectar, you cannot find it
          in any stores. It is a more difficult mattress to get ahold of, but it
          is backed by the same 365 day trial period, allowing consumers to
          experience it for all four seasons before they decide if it is right
          for them.&nbsp;
        </p>

        <DreamCloud />

        <p>
          Touted as a luxury mattress, this impressive product is filled with
          multiple layers, a cashmere top in either a tight or Euro design, and
          pocketed coils in order to make it feel like you are sleeping on a
          cloud. Many reviewers would agree, this bed is truly a dream come
          true.
        </p>

        <ProsConsTable proscons={proscons} />
      </div>

      <div className="chapter-content" id="chapter">
        <div className="flex items-center justify-between gap-10 py-7">
          <h3 className="!my-0">Customer reviews</h3>
          <span className="not-prose">
            <Link href="#" className="btn-primary">
              Leave review
            </Link>
          </span>
        </div>
        <h3 className="chapter-title mb-5 text-lg font-bold text-black">
          How is it Rated?
        </h3>
        <HowRated />

        <p>
          The DreamCloud mattress is only available in one firmness, which sits
          at about a 5 on the scale. This classifies it as a medium in firmness,
          a great option for all types of sleepers. Combo sleepers will find
          this to be the best option out of all types of sleepers, as the foam
          is extremely responsive and has very little delay when it comes to
          shifting to match you as you move.
        </p>

        <p>
          The downside to being a 5 on the firmness scale, however, is that
          stomach and back sleepers may find this to be a bit too soft to get
          the full support that they require, and depending on your weight this
          could impact your decision on whether or not this is the mattress for
          you. Stomach sleepers especially will be impacted by the single
          firmness availability, as there is no option to increase if you find
          it isn’t working out.&nbsp;
        </p>

        <p>
          In terms of individual size, this is actually one of the better
          mattress models for individuals who are heavier in weight. While many
          foam options tend to not hold up as well over time, the five layer
          construction of the DreamCloud and seven layer construction of the
          Premier Rest option, mean that the support is there, as well as
          overall comfort. Those who are lighter in weight may find the mattress
          to be a bit more than they need, as 14” of support and comfort will be
          wasted. That doesn’t mean it has any negative effect, it simply means
          that they can save money by purchasing a smaller sized mattress
          elsewhere. For those who fall into the average weight category, this
          mattress works perfectly, offering great support and overall comfort
          regardless of your preferred sleep position.
        </p>
      </div>

      <div className="chapter-content" id="chapter">
        <h3 className="chapter-title">Product Features</h3>
        <p>
          While the average mattress size is closer to 10” in height, the
          DreamCloud measures in at a full 14”, with the DreamCloud Premier Rest
          measuring at 16”. This excess in height is attributed to the
          individual layers which make up its construction, and it has a total
          of 2 extra inches over its sibling the Nectar. One of the biggest
          reasons that the extra height is necessary is due to the fact that it
          is a hybrid mattress, so it combines aspects from both memory foam
          options and traditional coil models.&nbsp;
        </p>

        <p>
          Even though it is equipped with coils, the DreamCloud still ships the
          same as most internet-based products, arriving compressed and rolled
          up into a cardboard box. It is easy to set up, and will pop into shape
          within minutes of being released from its packaging. If you are unsure
          about how to do it yourself, the company does offer white glove
          services, in which they will deliver, set up, and remove your old
          mattress for you. This service comes at a cost, and it is important to
          note that if you end up returning the mattress then the white glove
          service is non-refundable.
        </p>

        <DreamCloud />

        <p>
          DreamCloud mattresses are manufactured in China and then shipped to
          the United States for distribution. DreamCloud&lsquo;s foams meet
          CertiPUR-US standards for content, emissions, and durability, and are
          analyzed by independent, accredited testing laboratories. The mattress
          is safe for you and the environment, and there should be very little
          off-gassing when you open the product. Any smell that does exist,
          typically will dissipate fairly quickly meaning you should be able to
          use it the same night that it arrives.
        </p>

        <p>
          In terms of the five distinct layers, the DreamCloud mattress starts
          with a tight, cashmere cover that is tufted , ensuring a comfortable
          and luxurious feel when you lay down. The cashmere-poly blend is very
          breathable, helping to reduce nighttime sweating as well as helping to
          keep the mattress from deteriorating on the inside. The hand-tufting
          is also an added bonus, as it is one of the best ways to ensure that
          the layer stays firmly in place and does not detach or move over time.
        </p>

        <p>
          In regards to the DreamCloud Premier, the first layer you will
          encounter is their upgraded Euro Top. Made from a luxury
          cashmere-blend, the Euro Top is plush and enveloping while still
          remaining breathable, giving you the ultimate comfort throughout the
          night.
        </p>

        <p>
          The first foam layer that exists is their gel-infused memory foam, a
          cooling and comfortable foam that is designed for increase body
          contouring and comfort. While this isn’t the thickest layer of the
          mattress, it does do its job and ensures that mattress doesn’t run hot
          even in the summer months. This layer also assists with general
          support and has a similar feeling to traditional memory foam
          mattresses.&nbsp;
        </p>

        <p>
          Next you will find a layer of super soft quilted memory foam, which
          combined with the gel infused memory foams comes to around 1.5” in
          height. This layer is part of their proprietary blend, and is designed
          solely by the brand for this product. While not adding anything in
          terms of support, this layer is solely in place to increase how
          comfortable and luxurious the mattress feels. It is extremely plush,
          and sinks nicely to most body types. It also is extremely responsive,
          one of the reasons this mattress does so well with combo sleepers.
          While enveloping the sleeper in one position, it will snap back as
          soon as you get up or move.
        </p>

        <p>
          Between the super soft foams and the upcoming transitional foams,
          there is a fourth layer that is comprised of natural latex. While the
          brand claims that this layer is hypoallergenic, those who suffer from
          latex allergies may be concerned. Thankfully it is located in the
          center of the product, so there is virtually no risk of your body
          coming in contact with it, but if you have a significantly severe
          allergy then this is something you will want to be aware of. The
          purpose of this layer is to create a bit more bounce within the
          mattress, and increases the give as well as the contouring abilities.
        </p>

        <p>
          The fifth layer is made up of the brand’s DreamPlush memory foam, a
          material that assists in the transition between the comfort layers and
          the support portions of the mattress. This is then followed by the
          super soft super dense memory foam, which combined with the
          DreamPlush, comes in at around 2.5” in height. Here is where the
          majority of resistance and support come from, and the portion of foam
          that helps make this bed beneficial for stomach sleepers, back
          sleepers, and those who are heavier in weight.&nbsp;
        </p>

        <p>
          As we near the bottom of the mattress we find their 8” of BedRest
          coils, a patent-pending design that is made up of microcoils that are
          foam encased and spread out into five distinct zones. This is the
          aspect that makes this product a hybrid mattress, as it creates a more
          traditional feel and experience. Unlike most coil mattresses, the ones
          used in this construction are significantly smaller and tighter,
          lending to a firmer and more supportive base. The five zones do end up
          affecting edge-control, however, and though you will feel fully
          supported for the most part, the edges of the bed can sag over time.
        </p>

        <p>
          The final layer in the DreamCloud is a high density super soft memory
          foam, which helps to encase the coils. The firmness allows for a bit
          of extra body support, but it also is the layer that functions in
          terms of motion isolation. Overall, most consumers find that there is
          very little motion transfer throughout the night, an impressive feat
          for a mattress that contains coils.
        </p>

        <Image src={dreamcloudimg} alt="Dream Cloud" />
      </div>

      <div className="chapter-content" id="chapter">
        <h3 className="chapter-title">Foundations</h3>
        <p>
          Like with many of the online mattress manufacturers, DreamCloud sells
          much more than just their namesake mattress. For those who are looking
          to fully set up their bed, you have the option between a few different
          foundations and bases.&nbsp;
        </p>

        <p>
          If you already own a boxspring, but lack a bed frame, DreamCloud sells
          a very basic metal frame that is adjustable to match whichever
          mattress size you purchase. There are no slats, so a boxspring is
          required, and there is no headboard or footboard either. This is a
          very simple frame, but it is extremely sturdy and durable. It also
          offers significant airflow to the bottom of the mattress, and is great
          for those seeking a more simplistic and minimalistic bedroom look.
        </p>

        <p>
          Those who do not want to purchase a boxspring, or who prefer the look
          of a headboard are in luck as DreamCloud also sells a frame that
          includes an upholstered headboard. Utilizing wooden slats on the
          bottom, it can be used directly with the mattress and requires no
          additional purchases. It is available in two colors: grey or linen,
          and can be bought as a full, queen, or king size.&nbsp;
        </p>

        <p>
          In between the metal frame and the headboard option, these is a
          platform base available for purchase. While it does not come with a
          headboard, it is perfect for those who do not have, or want, a
          boxspring, and can be used directly with the new mattress. Slats are
          spaced 4” apart to help reduce any sagging, and it comes in the same
          six sizes as their mattresses.
        </p>

        <p>
          Finally, there is an adjustable frame available for anyone who is
          seeking a more customizable experience. Both the head and feet
          portions move separately, and you control the height with a wireless
          remote. While it does come in five size options, only the king frame
          can be split, which allows for two individuals to control their own
          sides independent of the other.&nbsp;
        </p>

        <p>
          Along with the various frames, DreamCloud has a selection of bedding
          add-ons that are available at check out. Both pillows and sheet sets
          are easily purchased, as well as specialty items such as their 20lb
          weighted blanket. There is also a mattress protector which they highly
          recommend in order to keep your new product safe from spills, stains,
          and various allergens.&nbsp;
        </p>
      </div>

      <div className="chapter-content" id="chapter">
        <h3 className="chapter-title">DreamCloud Cost</h3>
        <p>
          Pricing for both the DreamCloud and DreamCloud Premier are both very
          reasonably priced, especially when compared with other hybrids on the
          market. Starting at only $699 for a twin, you can then upgrade to the
          Premier for a flat $200 at checkout. Likewise, with the Queen-size
          model, the DreamCloud is an affordable $999, with the Premier priced
          at $1,399.&nbsp;
        </p>

        <p>
          The standard pillows that DreamCloud sells are $99 per pillow, and are
          made from their own DreamCloud memory foam. Each pillow is curved to
          match the natural shape of your head and neck, and the top is
          adjustable in order to allow for individual height preferences.
        </p>

        <DreamCloud />

        <p>
          Sheet sets range depending on what size you opt for, but they start at
          $109 and cap out at $129. Many consumers may find that purchasing
          these sheets are worth the added cost, as the 14” mattress may not fit
          standard sized sheets. Instead, you will already need to own extra
          deep sets in order to properly fit the DreamCloud. Sheets are only
          available in white, and are made of 100% cotton. Each package will
          contain a fitted sheet, a flat sheet, and 1 or 2 pillowcase covers
          depending on the size you pick.
        </p>

        <p>
          Like with the sheets, the mattress cover is another purchase you may
          want to consider as it is specifically designed to protect a 14”
          mattress height. It is 100% waterproof while also being noiseless, and
          it ranges in price from $89 to $109.&nbsp;
        </p>

        <p>
          Finally, the 20lb weighted blanket is available for anyone who wants
          the comfort and security that comes with this product. It has a
          removable cover to make washing easy, and it can help reduce anxiety
          or assist with sleep issues. One blanket is only large enough to cover
          one person, so for a full sized bed you would need to buy two in order
          to get complete coverage. The blanket only comes in one size and it
          retails for $169.
        </p>
      </div>

      <div className="chapter-content" id="chapter">
        <h3 className="chapter-title">DreamCloud Comparison</h3>

        <ComparisionTable />

        <p>
          When it comes to the price of the DreamCloud it isn’t the cheapest
          mattress available, but it is also nowhere near being the most
          expensive. For an average coil mattress, most people can expect to pay
          around $1,500, whereas memory foams average about $900. hybrids are
          almost always the more expensive option, with the average price tag
          somewhere around $2,000 or higher. Given that the DreamCloud Premier
          is a hybrid, the $1,399 price tag on the queen is extremely reasonable
          for what you are getting. If we compare it directly to other hybrid
          mattresses, such as the Casper Wave, we can see a very significant
          price difference between the two. The cheapest model mentioned in the
          chart is the Tuft &amp; Needle, but it is important to note that this
          one is not a hybrid, and is fact only a memory foam option.
        </p>

        <p>
          With regards to the mattress height, there is a significant difference
          between the DreamCloud and other models on the market. Coming in at a
          total of 14” it surpasses others by 2” - 5” total. While there is no
          significant benefit to added height, this does account for the eight
          distinct layers which may add to the supportive nature. For very short
          individuals, or people with knee and back problems, getting in and out
          of the bed may be more difficult. This will be even more true once you
          include a box spring, something that averages an extra 5” -6” of
          height. For this reason, most people will likely want to opt for a
          foundation bed that has built in slats for support.
        </p>

        <p>
          DreamCloud does an amazing job of easing consumers minds by offering
          both a 365 day trial period as well as a lifetime guarantee. Both of
          these exceed the standards set by similar companies, which mostly
          offer a 100 night guarantee and a 10 year warranty period. Since these
          mattresses are only sold online, and you have no way of testing them
          before you buy, these offers make the process less stressful since you
          know you can return at any time within a year for a full money back
          guarantee.
        </p>

        <p>
          Overall, the DreamCloud performs similarly, if not better, than other
          hybrid mattresses on the market. It works for people of all sizes, and
          can even be used by all types of sleepers which is not very common.
          The areas where it is lacking, such as edge support and firmness
          options, are made up for with its general comfort, luxury feel, and
          supportive design and construction.
        </p>

        <Image src={dreamcloudimg} alt="Dream Cloud" />
      </div>

      <div className="chapter-content" id="chapter">
        <h3 className="chapter-title">Company Information</h3>
        <p>
          Created by the same people who made the Nectar Mattress, the
          DreamCloud is subsidiary of the parent organization Resident Home LLC.
          It was founded by Craig Schmeizer, Eric Hutchinson and Ran Reske in
          California, and is headquartered in Palo Alto, CA to this day. All
          products are made in China then shipped to a distribution center in
          Washington State. From the distribution center the mattress is then
          shipped anywhere within the United State, but as of now is not
          currently shipped internationally.&nbsp;
        </p>

        <p>
          Other than some general information, there is not too much available
          regarding the company as a whole. In 2018 the purchased another
          company called Level Sleep, adding to their ever growing brand of
          mattresses and sleep products. Level Sleep is their first move into
          science-based sleep products, with a focus on items that reduce pain
          and assist those who suffer from physical ailments.&nbsp;
        </p>

        <DreamCloud />

        <p>
          If you are looking to contact DreamCloud you can do so via their
          website, where they have options for live chat, email, and the choice
          to phone a customer service representative directly. They are
          available seven days a week, and their help lines are open from 6am to
          6pm PST.
        </p>

        <p>
          While not much is known about the company, one thing they do promote
          is the fact that they are actively engaged in charity work through
          their business. They work closely with an organization called
          ClimatePartner, a company that partners with various brands in order
          to offer various solutions to help them reduce their CO2 emissions.
          Not only are they actively partnered with them, but they also donate
          all returned mattresses to the Salvation Army and other charities in
          order to reduce the chance of them ending up in a landfill. By both
          cutting back on waste, and providing mattresses for those who are in
          need, their charity work is one of many selling points when it comes
          to the DreamCloud.
        </p>
      </div>

      <div className="chapter-content" id="chapter">
        <h3 className="chapter-title">Bottom Line</h3>
        <p>
          As a whole, the DreamCloud mattress is a worthwhile product for those
          looking to enhance their sleeping experience. If you find memory foam
          mattresses do not offer enough firmness and support, yet traditional
          spring mattresses are too firm or lack motion isolation, then opting
          for a hybrid can revolutionize your experience. The downside is the
          lack of firmness options, but sitting directly in the middle of the
          scale means it is likely to be a good choice for most people.&nbsp;
        </p>

        <p>
          Just like with most mattresses, stomach sleepers are the least likely
          to prefer this option, but that simply comes down to their unique
          sleeping choice. Compared with similar products, however, it does rate
          higher for stomach sleepers than most other models that are available
          on the market as of today.
        </p>

        <p>
          With a rigorous testing process, a partnership with an environmental
          company, and their commitment to charity, this is certainly a product
          you can feel good about ordering. None of their components are
          certified organic or recycled, but they do ensure that they use high
          quality foams that have very little off-gassing.&nbsp;
        </p>

        <p>
          If you end up unhappy with the product for any reason, simply return
          it within the 365 day window to get your full money back. An offer
          like that makes it very hard to turn the product down, and for those
          who want a new, luxury mattress, the DreamCloud is hard to beat.
        </p>
      </div>
    </Article>
  );
}
