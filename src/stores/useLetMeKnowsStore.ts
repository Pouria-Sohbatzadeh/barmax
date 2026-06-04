import { create } from "zustand";
import { LetMeknow } from "../routing/LetmeKnow/LetMeKnowsTablesRows";

interface Filters {
  title: string;
  origin: string;
  destination: string;
  vehicle: string;
}

interface LetMeKnowStore {
  letMeKnowData: LetMeknow[];
  filteredData: LetMeknow[];
  filters: Filters;

  addLetMeKnow: (item: LetMeknow) => void;
  removeLetMeKnow: (id: number) => void;
  updateFilter: (key: keyof Filters, value: string) => void;
}

const filterData = (
  data: LetMeknow[],
  filters: Filters
): LetMeknow[] => {
  return data.filter((item) => {
    const matchesTitle = item.title.includes(filters.title);

    const matchesOrigin =
      !filters.origin || item.origin === filters.origin;

    const matchesDestination =
      !filters.destination ||
      item.destination === filters.destination;

    const matchesVehicle =
      !filters.vehicle ||
      item.vehicle === filters.vehicle;

    return (
      matchesTitle &&
      matchesOrigin &&
      matchesDestination &&
      matchesVehicle
    );
  });
};

const initialData: LetMeknow[] = [
  {
    id: 1,
    title: "متین",
    phone: "01959399429",
    origin: "آبش احمد",
    destination: "آذرشهر",
    vehicle: "خاور مبلی بغل بازشو",
    startingTonnage: "",
    endingTonnage: "",
    startingPrice: "",
    endingPrice: "",
    submitTime: "9 خرداد 1405 , 13:25",
  },
];

const initialFilters: Filters = {
  title: "",
  origin: "",
  destination: "",
  vehicle: "",
};

const useLetMeKnowStore = create<LetMeKnowStore>((set) => ({
  letMeKnowData: initialData,
  filters: initialFilters,
  filteredData: initialData,

  addLetMeKnow: (item) =>
    set((state) => {
      const letMeKnowData = [...state.letMeKnowData, item];

      return {
        letMeKnowData,
        filteredData: filterData(letMeKnowData, state.filters),
      };
    }),

  removeLetMeKnow: (id) =>
    set((state) => {
      const letMeKnowData = state.letMeKnowData.filter(
        (item) => item.id !== id
      );

      return {
        letMeKnowData,
        filteredData: filterData(letMeKnowData, state.filters),
      };
    }),

  updateFilter: (key, value) =>
    set((state) => {
      const filters = {
        ...state.filters,
        [key]: value,
      };

      return {
        filters,
        filteredData: filterData(state.letMeKnowData, filters),
      };
    }),
}));

export default useLetMeKnowStore;