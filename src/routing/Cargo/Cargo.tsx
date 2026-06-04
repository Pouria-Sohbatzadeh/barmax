import Box from "../../component/Box";
import CargoUserFilters from "../../component/CargoUserFilters";
import CargoTable from "./CargoTable";

const Cargo = () => {
  return (
    <Box className="gap-7">
      <CargoUserFilters />

      <CargoTable />
    </Box>
  );
};

export default Cargo;
