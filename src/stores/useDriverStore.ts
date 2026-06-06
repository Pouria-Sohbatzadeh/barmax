import { create } from "zustand";

export interface Driver {
  id: number;

  name: string;
  last_name: string;
  phone: string;

  city: string;
  transport: string;

  carriedLoads: number;

  license_plate_part_a: string;
  license_plate_part_b: string;
  license_plate_part_c: string;
  license_plate_part_d: string;
}

export type NewDriver = Omit<Driver, "id">;

interface Filters {
  title: string;
  origin: string;
  transport: string;
}

interface DriverStore {
  drivers: Driver[];

  filter: Filters;

  updateFilter: (key: keyof Filters, value: string) => void;

  addDriver: (driver: NewDriver) => void;

  filteredDrivers: () => Driver[];
}

const useDriverStore = create<DriverStore>((set, get) => ({
  drivers: [
    {
      id: 1,

      name: "کاربر",
      last_name: "اکسل 1",
      phone: "09304758891",

      city: "زاهدان",
      transport: "خاور چادردار",

      carriedLoads: 0,

      license_plate_part_a: "95",
      license_plate_part_b: "599",
      license_plate_part_c: "الف",
      license_plate_part_d: "32",
    },
    {
      id: 2,

      name: "کاربر",
      last_name: "اکسل 2",
      phone: "09304482991",

      city: "زاهدان",
      transport: "خاور چادردار",

      carriedLoads: 0,

      license_plate_part_a: "85",
      license_plate_part_b: "524",
      license_plate_part_c: "ج",
      license_plate_part_d: "67",
    },
  ],

  filter: {
    title: "",
    origin: "",
    transport: "",
  },

  updateFilter: (key, value) =>
    set((state) => ({
      filter: {
        ...state.filter,
        [key]: value,
      },
    })),

  addDriver: (driver) =>
    set((state) => ({
      drivers: [
        ...state.drivers,
        {
          id: Date.now(),
          ...driver,
        },
      ],
    })),

  filteredDrivers: () => {
    const { drivers, filter } = get();

    return drivers.filter((driver) => {
      const fullName =
        `${driver.name} ${driver.last_name}`.toLowerCase();

      const licensePlate =
        `${driver.license_plate_part_a}${driver.license_plate_part_b}${driver.license_plate_part_c}${driver.license_plate_part_d}`.toLowerCase();

      const search = filter.title.toLowerCase();

      const titleMatch =
        fullName.includes(search) ||
        driver.phone.includes(search) ||
        licensePlate.includes(search);

      const cityMatch =
        !filter.origin || driver.city === filter.origin;

      const transportMatch =
        !filter.transport || driver.transport === filter.transport;

      return titleMatch && cityMatch && transportMatch;
    });
  },
}));

export default useDriverStore;