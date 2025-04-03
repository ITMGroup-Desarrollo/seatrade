import React from "react";
import usePort from "../hooks/use-port";

const Rueda = ({ className = "" }) => {
  const calls = usePort((state) => state.port.calls);

  if (calls >= 0 && calls < 250) {
    return (
      <div className={`absolute w-35 h-35 3xl:w-40 3xl:h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
        <div className="Loader"></div>
        <div className="segment-right "></div>
        <div className="segment-bottom "></div>
      </div>
    );
  }
  if (calls >= 250 && calls < 500) {
    return (
      <div className={`absolute w-35 h-35 3xl:w-40 3xl:h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
        <div className="Loader"></div>
        <div className="segment-right "></div>
        <div className="segment-bottom "></div>
        <div className="segment-left "></div>
      </div>
    );
  }
  if (calls >= 500 && calls < 750) {
    return (
      <div className={`absolute w-35 h-35 3xl:w-40 3xl:h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
        <div className="Loader"></div>
        <div className="segment-right "></div>
        <div className="segment-bottom "></div>
        <div className="segment-left "></div>
        <div className="segment-top "></div>
      </div>
    );
  }
  
};

export default Rueda;
