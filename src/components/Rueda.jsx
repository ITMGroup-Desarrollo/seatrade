import React from "react";

const Rueda = ({ className }) => {
  return (
    <figure class="chart" data-percent="50">
      <img
        class="html"
        src="https://dl.dropboxusercontent.com/s/68gv23q4y5qyq52/html5.svg"
      />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="75"
          cy="75"
          r="65"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>
  );
};

export default Rueda;
