import SelectFilter from "./SelectFilter";
import TitleFilter from "./TitleFilter";

import OriginPointIcon from "../Icons/CargoSelectFilters/OriginPointIcon";
import TransportIcon from "../Icons/CargoSelectFilters/TransportIcon";
import useCargoStore from "../stores/useCargoStore";

import Button from "./Button";
import { useState } from "react";
import AddDriverPopup from "../routing/Drivers/AddDriver/AddDriverPopups";

const DriversUserFilters = () => {
  const updateFilter = useCargoStore((state) => state.updateFilter);

  const originPointSelect = {
    lblTxt: "فیلتر شهر",
    id: "origin",
    options: [
      { value: "زاهدان", optTxt: "زاهدان" },
      { value: "تهران", optTxt: "تهران" },
    ],
  };

  const transportSelect = {
    lblTxt: "فیلتر ناوگان",
    id: "transport",
    options: [
      { value: "خودرو", optTxt: "خودرو" },
      { value: "کامیون", optTxt: "کامیون" },
    ],
  };

  const [addDriver, setAddDriver] = useState(false);

  return (
    <div className="w-full flex justify-between">
      <TitleFilter
        plcHolder="جستجو بر اساس نام, تلفن و پلاک..."
        titleFilter={(enteredTitle) => updateFilter("title", enteredTitle)}
        className="w-[280px]"
      />

      {/* Select Filters */}
      <div className="flex gap-3">
        <SelectFilter
          selectData={originPointSelect}
          icon={OriginPointIcon}
          sendSelectedOption={(selectedOption) =>
            updateFilter("origin", selectedOption)
          }
        />

        <SelectFilter
          selectData={transportSelect}
          icon={TransportIcon}
          sendSelectedOption={(selectedOption) =>
            updateFilter("transport", selectedOption)
          }
          className="w-[270px]"
        />

        <div className="relative">
          <Button
            type="button"
            className="gap-3 pt-[14px] pb-[14px]"
            btnDetails={{
              btnTxt: "افزودن راننده",
              btnFnc: () => setAddDriver(!addDriver),
            }}
          >
            <div className="p-[2px]  border border-white rounded-md flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Button>

          <AddDriverPopup visibility={addDriver} />
        </div>
      </div>
    </div>
  );
};

export default DriversUserFilters;
