import SelectFilter from "../SelectFilter";
import TitleFilter from "../TitleFilter";

import OriginPointIcon from "../../Icons/CargoSelectFilters/OriginPointIcon";
import TransportIcon from "../../Icons/CargoSelectFilters/TransportIcon";
import useLetMeKnowStore from "../../stores/useLetMeKnowsStore";
import SubmitLink from "../SubmitLink";
import { originPointSelect } from "../../constants/originSelect";
import { transportSelect } from "../../constants/transportSelect";
import { destinationPointSelect } from "../../constants/destinationSelect";

const LetMeKnowUserFilters = () => {
  const updateFilter = useLetMeKnowStore(
    (state) => state.updateFilter
  );


  return (
    <div className="w-full flex justify-between">
      <TitleFilter
        plcHolder="جستجو بر اساس نام..."
        titleFilter={(enteredTitle) =>
          updateFilter("title", enteredTitle)
        }
      />

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
            updateFilter("vehicle", selectedOption)
          }
        />

        <SubmitLink path="/letmeknow/submit" txt="ثبت جدید" />
      </div>
    </div>
  );
};

export default LetMeKnowUserFilters;
