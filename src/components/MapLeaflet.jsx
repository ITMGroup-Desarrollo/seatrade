import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import imageMap from "../assets/images/mapa-red.jpg";
import marketMap from "../assets/MapMarkerWhite.svg";

export default function Map() {
  const popupTitulo = document.getElementById("popup-titulo");
  const popupMensaje = document.getElementById("popup-mensaje");
  const popup = document.getElementById("popup");
  const botonCerrarPopup = document.getElementById("cerrar-popup");

  function mostrarPopup(titulo, mensaje) {
    popupTitulo.textContent = titulo;
    popupMensaje.textContent = mensaje;
    popup.style.display = "flex";
  }

  function ocultarPopup() {
    popup.style.display = "none";
  }

  botonCerrarPopup.addEventListener("click", ocultarPopup);
  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      ocultarPopup();
    }
  });
  // Dimensiones de la imagen

  useEffect(() => {
    const imageWidth = 6500;
    const imageHeight = 4000;

    // Definir los límites del mapa
    let bounds = [
      [0, 0],
      [imageHeight, imageWidth],
    ];
    // Inicializar el mapa
    const map = L.map("map", {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 2,
      zoomControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      maxBounds: bounds,
      attributionControl: false,
    });

    // Añadir una capa de tiles (por ejemplo, OpenStreetMap)
    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    // }).addTo(map);

    const pinIcon = L.divIcon({
      html: `<div class="custom-icon" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0">
            <img src="${marketMap.src}" class="icon-mark h-8 w-8" alt="retail" width="34" height="34">
        </div>`,
      className: "shadowMarker",
      iconSize: [34, 34],
      iconAnchor: [18, 30],
      popupAnchor: [0, -25],
    });

    L.imageOverlay(imageMap.src, bounds).addTo(map);
    map.fitBounds(bounds);

    // Añadir un marcador
    L.marker([1880, 1820], { icon: pinIcon })
      .addTo(map)
      .on("click", () => {
        mostrarPopup("Título", "Mensaje");
      });
    // .bindPopup("¡Hola! Este es un marcador en Leaflet.");

    // Limpiar el mapa al desmontar el componente
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="map-container h-full relative">
      <div id="map" className="h-full"></div>
      <div className="absolute top-0 left-0 p-4 z-[9999] flex justify-between w-full ">
        <div className="">
          <h1 className="uppercase text-4xl font-bold text-white">
            From <span>LOGO</span> to the world
          </h1>
        </div>
        <div className="flex space-x-4 text-white bg-white/50 rounded-md p-4">
          <div className="">
            15,000+ <span className="uppercase">Total Calls</span>
          </div>
          <div className="">
            15,000+ <span className="uppercase">Total Pax</span>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
