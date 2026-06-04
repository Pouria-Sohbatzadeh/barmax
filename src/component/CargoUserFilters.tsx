import { useState } from "react";

import SelectFilter from "./SelectFilter";
import TitleFilter from "./TitleFilter";

import { originPointSelect } from "../constants/originSelect";
import { destinationPointSelect } from "../constants/destinationSelect";
import { transportSelect } from "../constants/transportSelect";


import OriginPointIcon from "../Icons/CargoSelectFilters/OriginPointIcon";
import TransportIcon from "../Icons/CargoSelectFilters/TransportIcon";
import useCargoStore from "../stores/useCargoStore";
import SubmitLink from "./SubmitLink";

const CargoUserFilters = () => {
  const updateFilter = useCargoStore((state) => state.updateFilter);


  return (
    <div className="w-full flex justify-between">
      <TitleFilter
        plcHolder="جستجو بر اساس نام..."
        titleFilter={(enteredTitle) => updateFilter("title", enteredTitle)}
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
          selectData={destinationPointSelect}
          icon={OriginPointIcon}
          sendSelectedOption={(selectedOption) =>
            updateFilter("destination", selectedOption)
          }
        />

        <SelectFilter
          selectData={transportSelect}
          icon={TransportIcon}
          sendSelectedOption={(selectedOption) =>
            updateFilter("transport", selectedOption)
          }
        />

        <SubmitLink path="/cargo/submit" txt="ثبت بار" />

      </div>
    </div>
  );
};

export default CargoUserFilters;
