import { create } from "zustand";
import dataPorts from "../data/dataPorts.json";

const usePort = create((set, get) => ({
  port: 0,
  increasePopulation: () => set((state) => ({ port: state.port + 1 })),
  removePort: () => set({ port: 0 }),
  updatePort: (newPort) => set({ port: newPort }),
}));

export default usePort;
