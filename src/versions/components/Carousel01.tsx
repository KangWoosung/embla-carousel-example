/*  2024-02-28 04:30:00


*/

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel01 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <>
      <h3 className="dark:text-neutral-100">Carousel01</h3>

      <div className="bg-neutral-100 dark:bg-neutral-900">
        <div
          className="embla border max-wlg mt-0 mb-12 mx-auto h-56"
          ref={emblaRef}
        >
          <div className="embla__container h-full my-2 mx-3 py-2 px-3">
            <div className="dark:text-white embla__slide flex items-center justify-center">
              Slide 1
            </div>
            <div className="dark:text-white embla__slide flex items-center justify-center">
              Slide 2
            </div>
            <div className="dark:text-white embla__slide flex items-center justify-center">
              Slide 3
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel01;
