import { create } from "zustand";

interface TransportSearchStore {
  titleFilter: string;
  setTitleFilter: (title: string) => void;
}

const useTransportSearchStore = create<TransportSearchStore>((set) => ({
  titleFilter: "",
  setTitleFilter: (title) => set({ titleFilter: title }),
}));

export default useTransportSearchStore;