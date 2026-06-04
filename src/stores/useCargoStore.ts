import { create } from "zustand";
import { Cargo } from "../routing/Cargo/CargoTablesRows";

interface Filters {
  title: string;
  origin: string;
  destination: string;
  transport: string;
}

interface CargoStore {
  cargoData: Cargo[];

  filters: Filters;

  filteredCargoData: () => Cargo[];

  addCargo: (cargo: Cargo) => void;

  updateFilter: (
    key: keyof Filters,
    value: string
  ) => void;
}

const useCargoStore = create<CargoStore>((set, get) => ({
  cargoData: [
    {
      id: 1,
      title: "بار سیمان به مشهد",
      phone: "09123456789",
      origin: "باسمنج",
      destination: "بخشایش",
      vehicle: "خاور اتاق چوبی روباز",
      tonnage: "تناژ آزاد",
      price: "500,000 تومان",
      description: "",
    },
  ],

  filters: {
    title: "",
    origin: "",
    destination: "",
    transport: "",
  },

  addCargo: (cargo) =>
    set((state) => ({
      cargoData: [...state.cargoData, cargo],
    })),

  updateFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),

  filteredCargoData: () => {
    const { cargoData, filters } = get();

    return cargoData.filter((cargo) => {
      const matchesTitle = cargo.title.includes(filters.title);

      const matchesOrigin =
        !filters.origin || cargo.origin === filters.origin;

      const matchesDestination =
        !filters.destination ||
        cargo.destination === filters.destination;

      const matchesTransport =
        !filters.transport ||
        cargo.vehicle === filters.transport;

      return (
        matchesTitle &&
        matchesOrigin &&
        matchesDestination &&
        matchesTransport
      );
    });
  },
}));

export default useCargoStore;