import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import Card from "./Card";

export default function Carousel() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new Swiper(".carrusel-container", {
        loop: true,
        slidesPerView: 5,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  }, []);

  return (
    <div className="grid grid-rows-1 grid-cols-12 h-full px-8 py-4">
      <div className="text-white col-span-2 grid grid-cols-1 grid-rows-2 bg-[#233f80]/50  h-full py-4 pl-4 gap-2 rounded-l-xl">
        <Card className="row-span-1 grid grid-cols-2 grid-rows-1 ">
          <div className="col-span-1 justify-center self-center text-center rounded-xl h-full w-auto">
            <img
              src="src/assets/dominican-flag.svg"
              alt="dominican-flag"
              className="h-full w-auto"
            />
          </div>
          <div className="col-span-1 justify-center self-center text-left text-lg font-semibold pl-3">
            DOMINICAN REPUBLIC
          </div>
        </Card>
        <Card className="row-span-1 flex">
          <img
            className="w-2/3"
            src="src/assets/logo-white.svg"
            alt="logo-taino"
          />
        </Card>
      </div>
      <div className="col-span-8 w-full bg-[#233f80]/50 h-full justify-baseline items-center flex p-6">
        <div className="swiper carrusel-container h-full  rounded-xl bg-[#091e57]/80">
          <div className="swiper-wrapper w-full">
            <div className="swiper-slide h-full flex items-center justify-center text-white text-xl font-bold ">
              <div className=" h-full flex flex-col justify-center items-center  px-4 py-4">
                <img
                  className="h-full w-full rounded-xl"
                  src="src/assets/galery/galeryExample.jpg"
                  alt="galeryexample"
                />
              </div>
            </div>
            <div className="swiper-slide h-full   flex items-center justify-center text-white text-xl font-bold ">
              <div className="  h-full flex flex-col justify-center items-center  px-4 py-4">
                <img
                  className="h-full w-full rounded-xl"
                  src="src/assets/galery/galeryExample.jpg"
                  alt="galeryexample"
                />
              </div>
            </div>
            <div className="swiper-slide h-full   flex items-center justify-center text-white text-xl font-bold ">
              <div className="  h-full flex flex-col justify-center items-center  px-4 py-4">
                <img
                  className="h-full w-full rounded-xl"
                  src="src/assets/galery/galeryExample.jpg"
                  alt="galeryexample"
                />
              </div>
            </div>
            <div className="swiper-slide h-full   flex items-center justify-center text-white text-xl font-bold ">
              <div className="  h-full flex flex-col justify-center items-center  px-4 py-4">
                <img
                  className="h-full w-full rounded-xl"
                  src="src/assets/galery/galeryExample.jpg"
                  alt="galeryexample"
                />
              </div>
            </div>
            <div className="swiper-slide h-full   flex items-center justify-center text-white text-xl font-bold ">
              <div className="  h-full flex flex-col justify-center items-center  px-4 py-4">
                <img
                  className="h-full w-full rounded-xl"
                  src="src/assets/galery/galeryExample.jpg"
                  alt="galeryexample"
                />
              </div>
            </div>
            <div className="swiper-slide h-full   flex items-center justify-center text-white text-xl font-bold ">
              <div className=" h-full flex flex-col justify-center items-center px-4 py-4">
                <img
                  className="h-full w-full rounded-xl"
                  src="src/assets/galery/galeryExample.jpg"
                  alt="galeryexample"
                />
              </div>
            </div>
            <div className="swiper-slide h-full   flex items-center justify-center text-white text-xl font-bold ">
              <div className="h-full flex flex-col justify-center items-center  px-4 py-4">
                <img
                  className="h-full w-full rounded-xl"
                  src="src/assets/galery/galeryExample.jpg"
                  alt="galeryexample"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white col-span-2 grid grid-cols-1 grid-rows-2 bg-[#233f80]/50 h-full pr-4 py-4 gap-2 rounded-r-xl">
        <Card className="row-span-1 grid grid-cols-2 grid-rows-1">
          <div className="self-center text-center flex flex-row justify-center items-center z-10">
            <img
              src="src/assets/instagram-white.svg"
              alt="instagram"
              className="w-16 ml-6"
            />
            <p className="text-5xl font-thin opacity-70 self-center mb-3 ml-6">
              |
            </p>
          </div>

          <div className="self-center text-center text-6xl justify-center flex mb-2 font-semibold z-10">
            <p>10K</p>
          </div>
        </Card>

        <Card className="row-span-1 flex">
          <p className="text-3xl font-semibold">@TAINOBAYPORT</p>
        </Card>
      </div>
    </div>
  );
}
