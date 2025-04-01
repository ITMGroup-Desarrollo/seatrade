import { useEffect, useRef, useState } from "react";
import usePort from "../hooks/use-port";

export default function Popup() {
  const videoPort = usePort((state) => state.port.video);
  const popupRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !videoPort) return;

    const videoElement = videoRef.current;

    // Reiniciar el video
    videoElement.currentTime = 0;
    videoElement.load();

    const playPromise = videoElement.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error("Autoplay prevented:", error);
      });
    }

    const handleVideoEnd = () => {
      closePopup();
      console.log("el video termino");
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [videoPort]);

  const closePopup = () => {
    if (videoRef.current) {
      popupRef.current.classList.remove("flex");
      popupRef.current.classList.add("hidden");
      // videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      id="popup"
      ref={popupRef}
      className="popup absolute z-[999999] top-0 left-0 w-full h-full justify-center items-center hidden"
    >
      <div className="popup-contenido bg-[var(--color-secondary)]/80 p-5 rounded-xl text-center relative w-full h-full">
        <span
          id="cerrar-popup"
          onClick={closePopup}
          className="cerrar-popup absolute top-6 right-10 cursor-pointer text-[var(--color-blue-text)] p-3 bg-white rounded-full z-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.93em"
            height="1em"
            viewBox="0 0 1216 1312"
          >
            <path
              fill="currentColor"
              d="M1202 1066q0 40-28 68l-136 136q-28 28-68 28t-68-28L608 976l-294 294q-28 28-68 28t-68-28L42 1134q-28-28-28-68t28-68l294-294L42 410q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294l294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L880 704l294 294q28 28 28 68"
            />
          </svg>
        </span>
        <video
          id="popup-video"
          key={videoPort}
          ref={videoRef}
          className="w-full h-full object-cover"
          controls={false}
          autoPlay
          muted
        >
          <source src={videoPort} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
