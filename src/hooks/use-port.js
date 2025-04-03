import { create } from "zustand";
import dataPorts from "../data/dataPorts.json";

const DEFAULT_PORT = "cabo-rojo";

const usePort = create((set, get) => ({
  port: dataPorts[DEFAULT_PORT],
  hoveredPort: "Cabo Rojo",
  setPort: (portId) => {
    const selectedPort = dataPorts[portId];
    set({ port: selectedPort });
  },
  setHoveredPort: (portId) => {
    const selectedPort2 = dataPorts[portId]?.name;
    // console.log(selectedPort2);

    set({ hoveredPort: selectedPort2 });
  },
  // removePort: () => set({ port: 0 }),
  // updatePort: (newPort) => set({ port: newPort }),
}));

export default usePort;
