import React from "react";
import usePort from "../hooks/use-port";

const Rueda = ({ className = "" }) => {
  const pax = usePort((state) => state.port.pax);

  if (pax >= 0 && pax < 1000000) {
    return (
      <div className={`absolute w-35 h-35 3xl:w-40 3xl:h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
        <div className="Loader"></div>
        <div className="segment-right drop-shadow-[0_0_5px_aqua]"></div>
        <div className="segment-bottom drop-shadow-[0_0_5px_aqua]"></div>
      </div>
    );
  }
  if (pax >= 1000000 && pax < 2000000) {
    return (
      <div className={`absolute w-35 h-35 3xl:w-40 3xl:h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
        <div className="Loader"></div>
        <div className="segment-right drop-shadow-[0_0_5px_aqua]"></div>
        <div className="segment-bottom drop-shadow-[0_0_5px_aqua]"></div>
        <div className="segment-left drop-shadow-[0_0_5px_aqua]"></div>
      </div>
    );
  }
  if (pax >= 2000000 && pax < 3000000) {
    return (
      <div className={`absolute w-35 h-35 3xl:w-40 3xl:h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
        <div className="Loader"></div>
        <div className="segment-right drop-shadow-[0_0_5px_aqua]"></div>
        <div className="segment-bottom drop-shadow-[0_0_5px_aqua]"></div>
        <div className="segment-left drop-shadow-[0_0_5px_aqua]"></div>
        <div className="segment-top drop-shadow-[0_0_5px_aqua]"></div>
      </div>
    );
  }
  
};

export default Rueda;
