import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function Carousel() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new Swiper(".carrusel-container", {
        loop: true,
        slidesPerView: 3,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  }, []);

  return (
    <div className="grid grid-rows-1 grid-cols-4 h-full p-3">
      <div className="text-white col-span-1 grid grid-cols-1 grid-rows-3 bg-[#233f80] h-full p-3 py-4 gap-2 rounded-l-xl">
        <div className="row-span-1 bg-[#3a538c] grid grid-cols-2 grid-rows-1 rounded-xl">
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
        <div className="row-span-1 bg-[#3a538c] grid grid-cols-2 grid-rows-1 rounded-xl">
          <div className="self-center text-center flex flex-row justify-center items-center">
            <img
              src="src/assets/instagram-white.svg"
              alt="instagram"
              className="w-16 ml-6"
            />
            <p className=" text-5xl font-thin opacity-70 self-center mb-3 ml-6">
              |
            </p>
          </div>
          <div className="self-center text-center text-6xl justify-center flex mb-2 font-semibold">
            <p>9K</p>
          </div>
        </div>
        <div className="row-span-1 bg-[#3a538c] rounded-xl flex items-center justify-center">
          <a href="http://instagram.com/tainobayport/" target="_blank">
            <p className="text-3xl font-semibold">@TAINOBAYPORT</p>
          </a>
        </div>
      </div>
      <div className="col-span-3 w-full">
        <div className="swiper carrusel-container h-full rounded-r-xl">
          <div className="swiper-wrapper w-full">
            <div className="swiper-slide h-full bg-[#233f80] flex items-center justify-center text-white text-xl font-bold py-4 px-8">
              <div className="bg-[#091e57]  h-full flex flex-col justify-center items-center rounded-xl px-4 py4">
                <img
                  className="max-h-full w-full"
                  src="src/assets/galery/galeryExample.png"
                  alt="galeryexample"
                />
              </div>
            </div>
            <div className="swiper-slide h-full bg-[#233f80] flex items-center justify-center text-white text-xl font-bold py-4 px-8">
              <div className="bg-[#091e57]  h-full flex flex-col justify-center items-center rounded-xl px-4 py4">
                <img
                  className="max-h-full w-full"
                  src="src/assets/galery/galeryExample.png"
                  alt="galeryexample"
                />
              </div>
            </div>
            <div className="swiper-slide h-full bg-[#233f80] flex items-center justify-center text-white text-xl font-bold py-4 px-8">
              <div className="bg-[#091e57]  h-full flex flex-col justify-center items-center rounded-xl px-4 py4">
                <img
                  className="max-h-full w-full"
                  src="src/assets/galery/galeryExample.png"
                  alt="galeryexample"
                />
              </div>
            </div>
            <div className="swiper-slide h-full bg-[#233f80] flex items-center justify-center text-white text-xl font-bold py-4 px-8">
              <div className="bg-[#091e57]  h-full flex flex-col justify-center items-center rounded-xl px-4 py4">
                <img
                  className="max-h-full w-full"
                  src="src/assets/galery/galeryExample.png"
                  alt="galeryexample"
                />
              </div>
            </div>
            <div className="swiper-slide h-full bg-[#233f80] flex items-center justify-center text-white text-xl font-bold py-4 px-8 ">
              <div className="bg-[#091e57]  h-full flex flex-col justify-center items-center rounded-xl px-4 py4">
                <img
                  className="max-h-full w-full"
                  src="src/assets/galery/galeryExample.png"
                  alt="galeryexample"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
