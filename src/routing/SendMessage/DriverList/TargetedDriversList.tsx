import Checkbox from "@mui/material/Checkbox";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import useLightStore from "../../../stores/useLightStore";
import DriverProfile from "./DriverProfile";
import PhoneIcon from "../../../Icons/SubmitCargoIcons/PhoneIcon";
import TransportIcon from "../../../Icons/CargoSelectFilters/TransportIcon";
import OriginPointIcon from "../../../Icons/CargoSelectFilters/OriginPointIcon";

const TargetedDriversList = () => {
  const { light } = useLightStore();

  const drivers = [
    {
      id: 1,
      name: "کاربر اکسل",
      phone: "09394482991",
      vehicle: "خاور چادردار",
      origin: "زاهدان",
    },
    {
      id: 2,
      name: "کاربر نمونه",
      phone: "09121234567",
      vehicle: "تریلی",
      origin: "تهران",
    },
    {
      id: 3,
      name: "کاربر تست",
      phone: "09350000000",
      vehicle: "نیسان",
      origin: "اصفهان",
    },
  ];

  return (
    <ul
      className={`w-full border-[2px] rounded-2xl overflow-hidden ${
        light ? "border-[#f5f5f7] " : " shadow-md border-transparent"
      }`}
    >
      {drivers.map((driver, index) => (
        <li
          key={driver.id}
          className={`w-full  p-5 pr-4 pl-8 flex items-end justify-between border-b ${
            index === drivers.length - 1
              ? "border-transparent"
              : "border-[#f5f5f7]"
          }`}
        >
          <div className="flex items-center gap-2">
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
            />

            <DriverProfile />

            <div className="flex flex-col gap-2">
              <span className="font-bold">{driver.name}</span>

              <div className="flex items-center text-[#8e9399] font-bold">
                <PhoneIcon className="size-4" />

                <span className="mr-3 ml-7 text-[12px]">{driver.phone}</span>

                <div
                  className={`rounded-lg text-[12px] flex justify-center items-center border h-5 w-5 ${
                    light ? "border-[#8e9399]" : "shadow-md border-transparent"
                  }`}
                >
                  #
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-9 text-[14px]">
            <div className="flex items-center gap-1 text-[#8e9399]">
              <TransportIcon className="size-5" />

              <span>{driver.vehicle}</span>
            </div>

            <div className="flex items-center gap-1 text-[#8e9399]">
              <OriginPointIcon className="size-5" />

              <span>{driver.origin}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TargetedDriversList;
