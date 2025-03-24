export default function Popup() {
  return (
    <div
      id="popup"
      className="popup absolute z-[999999] top-0 left-0 w-full h-full justify-center items-center bg-black/50 hidden"
    >
      <div class="popup-contenido bg-white p-5 rounded-xl text-center relative">
        <span
          id="cerrar-popup"
          class="cerrar-popup absolute top-2.5 right-2.5 text-2xl cursor-pointer"
        >
          &times;
        </span>
        <h2 id="popup-titulo">Título</h2>
        <p id="popup-mensaje">Mensaje</p>
        <video controls="" autoplay="" transition:persist>
          <source
            src="https://ia804502.us.archive.org/33/items/GoldenGa1939_3/GoldenGa1939_3_512kb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
