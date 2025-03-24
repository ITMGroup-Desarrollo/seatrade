import { create } from "zustand";
import dataPorts from "../data/dataPorts.json";

const DEFAULT_PORT = "cabo-rojo";

const usePort = create((set, get) => ({
  port: dataPorts[DEFAULT_PORT],
  selectPort: (portId) => {
    const selectedPort = dataPorts[portId];
    set({ port: selectedPort });
  },
  // removePort: () => set({ port: 0 }),
  // updatePort: (newPort) => set({ port: newPort }),
}));

export default usePort;
