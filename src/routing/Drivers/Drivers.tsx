import Box from "../../component/Box";
import DriversUserFilters from "../../component/DriversUserFilters";
import DriversTable from "./DriversTable";


const Cargo = () => {
  return (
    <Box className="gap-7">
      <DriversUserFilters />

      <DriversTable />
    </Box>
  );
};

export default Cargo;
