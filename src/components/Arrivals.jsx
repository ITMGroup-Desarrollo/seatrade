import Pax from "./Pax";
import Calls from "./Calls";
import usePort from "../hooks/use-port";
import CallsIcon from "../assets/images/icon-calls.svg";
import PaxIcon from "../assets/images/icon-pax.svg";
import RuedaCalls from "./RuedaCalls";
import RuedaPax from "./RuedaPax";
import { useState, useEffect } from "react";

export default function Arrivals() {
  const name = usePort((state) => state.port.name);
  const calls = usePort((state) => state.port.calls);
  const [eventKey, setEventKey] = useState(0);

  useEffect(() => {
    const resetEvent = () => {
      setEventKey((prevKey) => prevKey + 1);
    };

    const icons = document.querySelectorAll(".icon-mark");
    icons.forEach((icon) => icon.addEventListener("click", resetEvent));

    return () => {
      icons.forEach((icon) => icon.removeEventListener("click", resetEvent));
    };
  }, []);

  return (
    <div
      className={`father h-full pl-7 pr-8  pt-4 ${
        !calls || calls.length === 0 ? "hidden" : "block"
      }`}
    >
      <div className="grid grid-rows-5 h-full rounded-xl bg-[var(--color-secondary)]/50 border-2 border-[var(--color-fifth-border)] gap-2">
        <div
          key={eventKey}
          className="row-span-1 text-white text-xl 3xl:text-3xl font-bold uppercase content-center text-center animate-fadeIn"
        >
          Arrivals&nbsp;in <br /> {name}
        </div>
        <div className="row-span-2 grid grid-rows-3 ">
          <div className="relative row-span-2 flex justify-center items-center text-center">
            <div className="flex flex-col items-center justify-center ">
              <img src={CallsIcon.src} alt="calls" className="w-10 3xl:w-12 z-10 " />
              <p className="textArrivals font-medium">CALLS</p>
            </div>
            <RuedaCalls
              key={eventKey}
              className="calls-container animate-fadeIn"
            />
          </div>

          <div className="row-span-1 text-center content-center text-white font-bold text-3xl md:text-2xl 3xl:text-5xl ">
            <Calls />
          </div>
        </div>
        <div className="row-span-2 grid grid-rows-3 ">
          <div className="pax-Container relative row-span-2 flex justify-center items-center text-center ">
            <div className="flex flex-col items-center justify-center ">
              <img src={PaxIcon.src} alt="Pax" className="w-10 3xl:w-12 z-10 " />
              <p className="textArrivals font-medium">PAX</p>
            </div>
            <RuedaPax key={eventKey} className="pax-container animate-fadeIn" />
          </div>
          <div className="row-span-1 text-center content-center text-white font-semibold text-3xl md:text-2xl 3xl:text-5xl">
            <Pax />
          </div>
        </div>
      </div>
    </div>
  );
}
