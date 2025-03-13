import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function Carousel() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new Swiper(".carrusel-container", {
        loop: true,
        slidesPerView: 3, // Muestra 3 slides al mismo tiempo
        autoplay: {
          delay: 3000, // Desliza cada 3 segundos
          disableOnInteraction: false, // No se detiene al interactuar
        },
      });
    }
  }, []);

  return (
    <div className="grid grid-rows-1 grid-cols-4 h-full">
      <div className="col-span-1 grid grid-cols-1 grid-rows-3 bg-blue-200 h-full p-3 py-4 gap-2">
        <div className="row-span-1 bg-amber-50 grid grid-cols-2 grid-rows-1 rounded-xl">
          <div className="col-span-1 justify-center self-center text-center rounded-xl h-full w-auto">
            <img
              src="src/assets/dominican-flag.svg"
              alt="dominican-flag"
              className="h-full w-auto"
            />
          </div>
          <div className="col-span-1 justify-center self-center text-left text-lg font-semibold">
            DOMINICAN REPUBLIC
          </div>
        </div>
        <div className="row-span-1 bg-amber-100 grid grid-cols-2 grid-rows-1 rounded-xl">
          <div className="self-center text-center flex flex-row justify-center items-center">
            <img
              src="src/assets/instagram-white.svg"
              alt="instagram"
              className="w-16 ml-6"
            />
            <p className="text-white text-5xl font-thin opacity-70 self-center mb-3 ml-6">
              |
            </p>
          </div>
          <div className="self-center text-center text-6xl justify-center flex mb-2 font-semibold">
            <p>9K</p>
          </div>
        </div>
        <div className="row-span-1 bg-amber-50 rounded-xl flex items-center justify-center">
          <a href="http://instagram.com/tainobayport/">
            <p className="text-3xl font-semibold">@TAINOBAYPORT</p>
          </a>
        </div>
      </div>
      <div className="col-span-3 h-full">
        <div className="swiper carrusel-container h-full bg-gray-200 p-4">
          <div className="swiper-wrapper h-full">
            <div className="swiper-slide h-full bg-red-500 flex items-center justify-center text-white text-xl font-bold">
              Slide 1
            </div>
            <div className="swiper-slide h-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
              Slide 2
            </div>
            <div className="swiper-slide h-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">
              Slide 3
            </div>
            <div className="swiper-slide h-full bg-yellow-500 flex items-center justify-center text-white text-xl font-bold">
              Slide 4
            </div>
            <div className="swiper-slide h-full bg-purple-500 flex items-center justify-center text-white text-xl font-bold">
              Slide 5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
