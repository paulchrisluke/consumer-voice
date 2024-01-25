import ReviewLogo from './review-logo';
import SearchLogo from './search-logo';
import StarLogo from './star-logo';

export default function WhyTrusted() {
  return (
    <section className="relative w-full border-b border-light-100 py-10 sm:bg-light md:py-28">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-[55px] text-center text-2xl font-light text-black md:text-[28px]">
          <strong className="font-bold">Why Trust </strong>ConsumerVoice.org?
        </h2>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 md:gap-12">
          <div className="flex  w-full flex-col items-center">
            <SearchLogo />
            <h5 className="mt-3.5 text-center text-base font-bold text-black md:text-xl">
              Research
            </h5>
          </div>
          <div className="flex  w-full flex-col items-center">
            <ReviewLogo />
            <h5 className="mt-3.5 text-center text-base font-bold text-black md:text-xl">
              Reviews
            </h5>
          </div>
          <div className="flex  w-full flex-col items-center">
            <StarLogo />
            <h5 className="mt-3.5 text-center text-base font-bold text-black md:text-xl">
              Recommendations
            </h5>
          </div>
        </div>
      </div>
      {/* <img
        src="./assets/images/home/trust-shape.png"
        alt="shape for trusted reviews"
        className="pointer-events-none absolute -left-20 top-1/2 z-0 hidden h-auto w-auto -translate-y-1/2 object-contain sm:block"
      /> */}
    </section>
  );
}
