import { Link } from "react-router";
import useDriverStore from "../../stores/useDriverStore";

const DriversTablesRows = () => {
  const filteredDrivers = useDriverStore((state) => state.filteredDrivers);

  const driverData = filteredDrivers();

  return (
    <>
      {driverData.map((driver) => (
        <tr key={driver.id}>
          <td className="text-center">
            {driver.name} {driver.last_name}
          </td>

          <td className="text-center relative">
            <div className="bg-[#f8faf9] font-bold p-2 rounded-full w-[130px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {driver.license_plate_part_a} | {driver.license_plate_part_b}  
              
            {" "}{driver.license_plate_part_c}{" "}

              {driver.license_plate_part_d}
            </div>
          </td>

          <td className="text-center">{driver.transport}</td>

          <td className="text-center">{driver.city}</td>

          <td className="text-center">{driver.carriedLoads}</td>

          <td className="">
            <Link to={""} className="text-center w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default DriversTablesRows;
