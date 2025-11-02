import { create } from "zustand";

interface MachineStore {
  color: string;
  setColor: (newColor: string) => void;
  scale: number;
  setScale: (newScale: number) => void;
  reset: () => void;
}

export const useMachineStore = create<MachineStore>((set) => ({
  color: "#2e2c2e",
  setColor: (newColor: string) => set({ color: newColor }),
  scale: 0.08,
  setScale: (newScale: number) => set({ scale: newScale }),
  reset: () => set({ color: "#2e2c2e", scale: 0.08 }),
}));