import Pax from "./Pax";
import Calls from "./Calls";
import usePort from "../hooks/use-port";

export default function Arrivals() {
  const name = usePort((state) => state.port.name);
  const calls = usePort((state) => state.port.calls);

  return (
    <div className={`father h-full px-8 mr-8 py-4 ${!calls || calls.length === 0 ? "hidden" : ""}`}>
      <div className="grid grid-rows-5 h-full rounded-xl bg-[#233f80]/50 border-2 border-[#38568e]">
        <div className="row-span-1 text-white text-xl font-bold uppercase content-center text-center">
          Arrivals&nbsp;in <br /> {name}
        </div>
        <div className="row-span-2 ">
          <Calls />
        </div>
        <div className="row-span-2 ">
          <Pax />
        </div>
      </div>
    </div>
  );
}
