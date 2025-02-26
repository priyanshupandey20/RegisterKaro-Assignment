import { useEffect, useRef } from "react";
import oracle from '../assets/oracle.png'
import Samsung from '../assets/samsung.svg'
import Razor from '../assets/razor-pay.webp'
import Books from '../assets/index_edited.webp'
import Adove from '../assets/Adobe.webp'

export default function TrustedBy() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    function scrollLogos() {
      scrollAmount += scrollStep;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollLogos);
    }

    scrollLogos();
  }, []);

  return (
    <div className="py-8 bg-white text-center">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
        Trusted By Over <span className="font-bold">100+ Startups</span> and freelance business
      </h2>

      <div className="overflow-hidden w-full max-w-6xl mx-auto">
        <div ref={sliderRef} className="flex items-center justify-evenly overflow-x-auto scrollbar-hide py-6">
          <img src={oracle} alt="Oracle" className="h-10" />
          <img src={Adove} alt="Adobe" className="h-12" />
          <img src={Razor} alt="Razor" className="h-7" />
          <img src={Samsung} alt="Samsung" className="h-6" />
          <img src={Books} alt="Books" className="h-10" />
          <img src={oracle} alt="Segment" className="h-10" />
        </div>
      </div>
    </div>
  );
}
