import { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import Card from "./Card";
import usePort from "../hooks/use-port";

export default function Carousel() {
  const slides = usePort((state) => state.port.slides);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && slides) {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }

      swiperRef.current = new Swiper(".carrusel-container", {
        loop: true,
        slidesPerView: slides,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, [slides]);
  
  const instagram = usePort((state) => state.port.instagram);
  const followers = usePort((state) => state.port.followers);
  const country = usePort((state) => state.port.country);
  const flag = usePort((state) => state.port.flag);
  const logo = usePort((state) => state.port.logo);
  const gallery = usePort((state) => state.port.gallery);
  
  const galleryClass = usePort((state) => state.port.galleryClass);
  const socialDisplay = usePort((state) => state.port.socialDisplay);

  return (
    <div className="grid grid-rows-1 grid-cols-12 h-full px-8 py-4">
      <div className="text-white col-span-2 grid grid-cols-1 grid-rows-2 bg-[#233f80]/50  h-full py-4 pl-4 gap-2 rounded-l-xl">
        <Card className="row-span-1 grid grid-cols-2 grid-rows-1 ">
          <div className="col-span-1 justify-center self-center text-center rounded-xl h-full w-auto">
            <img src={flag} alt="dominican-flag" className="h-full w-auto" />
          </div>
          <div className="col-span-1 justify-center self-center text-left text-lg font-semibold pl-3 uppercase">
            {country}
          </div>
        </Card>
        <Card className="row-span-1 flex">
          <img className="h-2/3" src={logo} alt="logo-taino" />
        </Card>
      </div>
      <div className={`col-span-8  w-full bg-[#233f80]/50 h-full justify-baseline items-center flex p-6 ${galleryClass}`}>
        <div className="swiper carrusel-container h-full  rounded-xl bg-[#091e57]/80">
          <div className="swiper-wrapper w-full">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="swiper-slide h-full flex items-center justify-center text-white text-xl font-bold"
              >
                <div className="h-full flex flex-col justify-center items-center px-4 py-4">
                  <img
                    className="h-full w-full rounded-xl"
                    src={image}
                    alt={`gallery-image-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`text-white col-span-2 grid grid-cols-1 grid-rows-2 bg-[#233f80]/50 h-full pr-4 py-4 gap-2 rounded-r-xl ${socialDisplay}`}>
        <Card className="row-span-1 grid grid-cols-2 grid-rows-1">
          <div className="self-center text-center flex flex-row justify-center items-center z-10">
            <img
              src="src/assets/instagram-white.svg"
              alt="instagram"
              className="w-16 ml-4"
            />
            <p className="text-5xl font-thin opacity-70 self-center mb-3 ml-6">
              |
            </p>
          </div>

          <div className="self-center text-center text-6xl justify-center flex mb-2 font-semibold z-10">
            <p>{followers}</p>
          </div>
        </Card>

        <Card className="row-span-1 flex">
          <p className="text-3xl font-semibold">{instagram}</p>
        </Card>
      </div>
    </div>
  );
}
