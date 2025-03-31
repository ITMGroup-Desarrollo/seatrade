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
  const [ruedaKey, setRuedaKey] = useState(0);

  useEffect(() => {
    const resetRueda = () => {
      setRuedaKey((prevKey) => prevKey + 1);
    };

    const icons = document.querySelectorAll(".icon-mark");
    icons.forEach((icon) => icon.addEventListener("click", resetRueda));

    return () => {
      icons.forEach((icon) => icon.removeEventListener("click", resetRueda));
    };
  }, []);

  return (
    <div
      className={`father h-full px-8 mr-8 py-4 ${
        !calls || calls.length === 0 ? "hidden" : "block"
      }`}
    >
      <div className="grid grid-rows-5 h-full rounded-xl bg-[var(--color-secondary)]/50 border-2 border-[var(--color-fifth-border)] gap-2">
        <div className="row-span-1 text-white text-xl font-bold uppercase content-center text-center">
          Arrivals&nbsp;in <br /> {name}
        </div>
        <div className="row-span-2 grid grid-rows-3 ">
          <div className="relative row-span-2 flex justify-center items-center text-center">
            <div>
              <img src={CallsIcon.src} alt="calls" className="w-12 z-10 icon-mark" />
              <p className="textArrivals font-medium">CALLS</p>
            </div>
             <RuedaCalls key={ruedaKey} className="calls-container"/>
          </div>

          <div className="row-span-1 text-center content-center text-white font-bold text-5xl ">
            <Calls />
          </div>
        </div>
        <div className="row-span-2 grid grid-rows-3 ">
          <div className="pax-Container relative row-span-2 flex justify-center items-center text-center">
            <div>
              <img src={PaxIcon.src} alt="Pax" className="w-12 z-10 icon-mark" />
              <p className="textArrivals font-medium">PAX</p>
            </div>
            <RuedaPax key={ruedaKey} className="pax-container" />
          </div>
          <div className="row-span-1 text-center content-center text-white font-semibold text-3xl">
            <Pax />
          </div>
        </div>
      </div>
    </div>
  );
}