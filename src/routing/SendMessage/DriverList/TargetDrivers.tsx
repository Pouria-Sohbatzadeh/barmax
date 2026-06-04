
import TargetDriverFilters from "./TargetDriverFilters";


import SelectAllFilteredDrivers from "./SelectAllFilteredDrivers";
import TargetedDriversList from "./TargetedDriversList";

const TargetDrivers = () => {
  

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-col gap-4">
        <TargetDriverFilters />

        <SelectAllFilteredDrivers />

        <TargetedDriversList />
      </div>
    </div>
  );
};

export default TargetDrivers;
