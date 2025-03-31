import React from "react";
import usePort from "../hooks/use-port";

const Rueda = ({ className = "" }) => {
  const calls = usePort((state) => state.port.calls);

  if (calls >= 0 && calls < 250) {
    return (
      <div className={`absolute w-40 h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
        <div className="Loader"></div>
        <div className="segment-right drop-shadow-[0_0_5px_aqua]"></div>
        <div className="segment-bottom drop-shadow-[0_0_5px_aqua]"></div>
      </div>
    );
  }
  if (calls >= 250 && calls < 500) {
    return (
      <div className={`absolute w-40 h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
        <div className="Loader"></div>
        <div className="segment-right drop-shadow-[0_0_5px_aqua]"></div>
        <div className="segment-bottom drop-shadow-[0_0_5px_aqua]"></div>
        <div className="segment-left drop-shadow-[0_0_5px_aqua]"></div>
      </div>
    );
  }
  if (calls >= 500 && calls < 750) {
    return (
      <div className={`absolute w-40 h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
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
