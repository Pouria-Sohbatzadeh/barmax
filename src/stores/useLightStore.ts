import { create } from "zustand";

interface SiteMode {
  light: boolean;
  changeMode: () => void;
}

const useLightStore = create<SiteMode>((set) => ({
  light: true,

  changeMode: () =>
    set((state) => ({
      light: !state.light,
    })),
}));

export default useLightStore;