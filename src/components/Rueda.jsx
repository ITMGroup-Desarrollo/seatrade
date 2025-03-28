import { div } from "framer-motion/client";
import React from "react";

const Rueda = ({ className = ""  }) => {
  return (
    <div className= {`absolute w-40 h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
      <div className="Loader"></div>
      <div className="segment-right drop-shadow-[0_0_5px_aqua]"></div>
      <div className="segment-bottom drop-shadow-[0_0_5px_aqua]"></div>
      <div className="segment-left drop-shadow-[0_0_5px_aqua]"></div>
      <div className="segment-top drop-shadow-[0_0_5px_aqua]"></div>
    </div>
  );
};

export default Rueda;
