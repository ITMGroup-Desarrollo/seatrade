import { useEffect, useRef, useState } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import Card from "./Card";
import usePort from "../hooks/use-port";
import Separador from "./Separador";

import logoInstagram from "../assets/instagram-white.svg";

export default function Carousel() {
  const slides = usePort((state) => state.port.slides);
  const port = usePort((state) => state.port);
  const swiperRef = useRef(null);
  const [eventKey, setEventKey] = useState(0);

  const initializeSwiper = () => {
    if (swiperRef.current) {
      swiperRef.current.destroy(true, true);
    }

    const getSlidesPerView = () =>
      window.innerWidth >= 1600 ? slides : slides - 2;

    swiperRef.current = new Swiper(".carrusel-container", {
      loop: true,
      slidesPerView: getSlidesPerView(),
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      on: {
        init: (swiper) => swiper.slideTo(0, 0, false),
      },
    });

    swiperRef.current.slideTo(0, 0, false);
  };
  //En caso de querer hacer dinamico el resize de la ventana
  // window.addEventListener("resize", () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.params.slidesPerView = getSlidesPerView();
  //     swiperRef.current.update();
  //   }
  // });
  useEffect(() => {
    if (typeof window !== "undefined" && slides) {
      initializeSwiper();
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, [slides, port]);
  useEffect(() => {
    const resetSwiper = () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        initializeSwiper();
      }
    };
    const resetEvent = () => {
      setEventKey((prevKey) => prevKey + 1);
    };
    const icons = document.querySelectorAll(".icon-mark");
    icons.forEach((icon) => icon.addEventListener("click", resetSwiper));
    icons.forEach((icon) => icon.addEventListener("click", resetEvent));

    return () => {
      icons.forEach((icon) => icon.removeEventListener("click", resetSwiper));
      icons.forEach((icon) => icon.removeEventListener("click", resetEvent));
    };
  }, []);

  return (
    <div className="grid grid-rows-1 grid-cols-12 h-full px-8 py-4">
      <div className="text-white col-span-2 grid grid-cols-1 grid-rows-2 bg-[var(--color-secondary)]/50  h-full py-4 pl-4 gap-2 rounded-l-xl">
        {/* <Card  className="row-span-1 grid grid-cols-2 grid-rows-1 md:px-2">
          <div  className="col-span-1 justify-center self-center text-center rounded-xl h-full w-auto p-2">
            <img
              src={port.flag}
              alt="dominican-flag"
              key={eventKey}
              className="h-full w-auto animate-fadeIn"
            />
          </div>
          <div key={eventKey} className="col-span-1 justify-center self-center text-center text-lg font-semibold uppercase animate-fadeIn">
            {port.country}
          </div>
        </Card> */}
        <Card className="flex">
          <div className="justify-center self-center text-center rounded-xl h-full w-auto ">
            <img
              src={port.flag}
              alt="dominican-flag"
              key={eventKey}
              className="h-full w-auto animate-fadeIn"
            />
          </div>
        </Card>
        <Card className="row-span-1 flex p-2">
          <img
            key={eventKey}
            className="h-5/6 animate-fadeIn"
            src={port.logo}
            alt="logo-taino"
          />
        </Card>
      </div>
      <div
        className={`col-span-8 w-full bg-[var(--color-secondary)]/50 h-full justify-baseline items-center flex p-5 ${port.galleryClass}`}
      >
        <div className="swiper carrusel-container h-full rounded-xl bg-[var(--color-tertiary)]/40">
          <div className="swiper-wrapper w-full">
            {port.gallery.map((image, index) => (
              <div
                key={index}
                className="swiper-slide h-full flex items-center justify-center"
              >
                <div className="h-full flex flex-col justify-center items-center px-4 py-4">
                  <img
                    className="h-full w-full rounded-xl animate-fadeIn object-cover"
                    src={image}
                    key={eventKey}
                    alt={`gallery-image-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`text-white col-span-2 grid grid-cols-1 grid-rows-2 bg-[var(--color-secondary)]/50 h-full pr-4 py-4 gap-2 rounded-r-xl ${port.socialDisplay}`}
      >
        <Card className="row-span-1 flex">
          <div className="self-center text-center flex flex-row justify-center items-center z-10">
            <img
              src={logoInstagram.src}
              alt="instagram"
              className="w-10 3xl:w-16 "
            />
          </div>
          <Separador className="max-h-2/3 mx-4 3xl:mx-7" />
          <div className="self-center text-center text-3xl 3xl:text-5xl justify-center flex mb-2 font-semibold z-10 ">
            <p key={eventKey} className="animate-fadeIn">
              {port.followers}
            </p>
          </div>
        </Card>

        <Card
          className="row-span-1 flex flex-col content-center py-0.5
        "
        >
          <p
            key={eventKey}
            className="text-xs 3xl:text-xl font-semibold animate-fadeIn"
          >
            {port.instagram}
          </p>
          <div>
            <img
              key={eventKey}
              className="animate-fadeIn"
              src={port.qr}
              width={70}
              alt=""
            />
          </div>
          <p className="uppercase text-xs 3xl:text-xl font-semibold animate-fadeIn">
            Follow Us!
          </p>
        </Card>
      </div>
    </div>
  );
}
