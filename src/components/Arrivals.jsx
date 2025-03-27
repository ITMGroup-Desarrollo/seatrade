import Pax from "./Pax";
import Calls from "./Calls";
import usePort from "../hooks/use-port";

export default function Arrivals() {
  const name = usePort((state) => state.port.name);
  const calls = usePort((state) => state.port.calls);

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
            <div><img
              src="src/assets/images/icono-calls.svg"
              alt="calls"
              className="w-12 z-10"
            />
            <p className="textArrivals font-medium">CALLS</p>
            </div>
            <img
              src="src/assets/images/icono-rueda.svg"
              alt="rueda"
              className="absolute w-36 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <div className="row-span-1 text-center content-center text-white font-bold text-5xl">
            <Calls />
          </div>
        </div>
        <div className="row-span-2 grid grid-rows-3 ">
        <div className="relative row-span-2 flex justify-center items-center text-center">
            <div>
            <img
              src="src/assets/images/icono-pax.svg"
              alt="calls"
              className="w-8 z-10"
            />
            <p className="textArrivals font-medium">PAX</p>
            </div>
            <img
              src="src/assets/images/icono-rueda.svg"
              alt="rueda"
              className="absolute w-36 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="row-span-1 text-center content-center text-white font-semibold text-3xl">
            <Pax />
          </div>
        </div>
      </div>
    </div>
  );
}
