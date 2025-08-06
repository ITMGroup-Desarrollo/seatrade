import { useState, useEffect } from "react";
import Card from "./Card";
import Separador from "./Separador";
import AnimatedNumber from "../components/AnimatedNumber";
import happyIcon from "../assets/images/icono-feliz.gif";

export default function StaticInfoMap() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const cerrarPopup = document.getElementById("cerrar-popup");
    const staticInfo = document.getElementById("staticInfo");

    if (!cerrarPopup || !staticInfo) return;

    const handlePopupClick = () => {
      if (staticInfo.classList.contains("hidden")) {
        staticInfo.classList.replace("hidden", "flex");
        setKey((prevKey) => prevKey + 1); 
      }
    };

    cerrarPopup.addEventListener("click", handlePopupClick);
    return () => cerrarPopup.removeEventListener("click", handlePopupClick);
  }, []);

  return (
    <div
      id="staticInfo"
      className="pl-8 flex absolute bottom-0 w-full justify-around"
    >
      <Card className="flex w-3/8 3xl:w-2/4 mr-5 3xl:mr-10">
        <div className="flex items-center">
          <div className="text-3xl md:text-xl 3xl:text-5xl mr-2 text-white font-bold">
            <AnimatedNumber key={`${key}-1`} value={1646} duration={1500} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-xs md:text-tiny 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              Total
            </span>
            <span className="text-xs md:text-tiny 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              Calls
            </span>
          </div>
        </div>

        <Separador className="mx-3 3xl:mx-10" />

        <div className="flex items-center">
          <div className="text-3xl md:text-xl 3xl:text-5xl mr-2 text-white font-bold">
            <AnimatedNumber key={`${key}-2`} value={6411000} duration={2200} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-xs md:text-tiny 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              Total
            </span>
            <span className="text-xs md:text-tiny 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              pax
            </span>
          </div>
        </div>
      </Card>
      <Card className="flex w-1/4 mr-5 3xl:mr-10">
        <div className="flex items-center">
          <div className="text-3xl md:text-xl 3xl:text-5xl mr-2 text-white font-bold">
            <AnimatedNumber key={`${key}-3`} value={7} duration={1000} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-xs md:text-tiny 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              cruise port
            </span>
            <span className="text-xs md:text-tiny 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              destinations
            </span>
          </div>
        </div>

        <Separador className="mx-2 3xl:mx-3" />

        <div className="flex items-center">
          <div className="text-3xl md:text-xl 3xl:text-5xl mr-2 text-white font-bold">
            <AnimatedNumber key={`${key}-4`} value={4} duration={700} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-xs md:text-tiny 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              countries
            </span>
          </div>
        </div>
      </Card>
      <Card className="flex w-1/4">
        <div className="flex items-center">
          <div className="text-5xl mr-6 text-white font-bold">
            <img
              src={happyIcon.src}
              alt="Happy Icon"
              className="drop-shadow-[0_0_5px_#54c0e8] md:w-8 3xl:w-13 happyFace"
            />
          </div>
          <div>
            <div>
              <p className="text-xs  3xl:text-base text-[var(--color-blue-text)] leading-none font-bold uppercase">
                satisfaction rate
              </p>
            </div>
            <div className="flex uppercase font-bold">
              <div className="text-2xl 3xl:text-4xl mr-2 text-white font-bold leading-none">
                <p className="leading-none">
                  <AnimatedNumber key={`${key}-5`} value={96} duration={1500} />%
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-tiny 3xl:text-xs text-white leading-none">
                  satisfied
                </span>
                <span className="text-tiny 3xl:text-xs text-white leading-none">
                  &&nbsp;very&nbsp;satisfied
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
