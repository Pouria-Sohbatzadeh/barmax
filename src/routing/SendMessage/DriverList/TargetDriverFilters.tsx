import { useState } from "react";
import OriginPointIcon from "../../../Icons/CargoSelectFilters/OriginPointIcon";
import TransportIcon from "../../../Icons/CargoSelectFilters/TransportIcon";
import { transportSelect } from "../../../constants/transportSelect";
import TitleFilter from "../../../component/TitleFilter";
import SelectFilter from "../../../component/SelectFilter";

const TargetDriverFilters = () => {
  const [forms, setForms] = useState({
    titlePhoneCarNmb: "",
    city: "",
    transport: "",
  });

  const citySelect = {
    lblTxt: "انتخاب شهر",
    id: "origin",
    options: [
      { value: "زاهدان", optTxt: "زاهدان" },
      { value: "تهران", optTxt: "تهران" },
    ],
  };

  return (
    <>
      {/* <div className="w-full flex items-center gap-2">
        <TitleFilter
          plcHolder="جستجو بر اساس نام, تلفن و پلاک..."
          titleFilter={(enteredTitle) =>
            updateFilter("titlePhoneCarNmb", enteredTitle)
          }
        />

        <SelectFilter
          selectData={citySelect}
          icon={OriginPointIcon}
          sendSelectedOption={(selectedOption) =>
            updateFilter("city", selectedOption)
          }
        />

        <SelectFilter
          selectData={transportSelect}
          icon={TransportIcon}
          sendSelectedOption={(selectedOption) =>
            updateFilter("vehicle", selectedOption)
          }
        />
      </div> */}

      <div className="w-full flex justify-between gap-3 items-center">
        <TitleFilter
          plcHolder="جستجو بر اساس نام, تلفن و پلاک..."
          titleFilter={(enteredTitle) =>
            setForms({ ...forms, titlePhoneCarNmb: enteredTitle })
          }
          inputClass="!text-[11px]"
        />

        <SelectFilter
          selectData={citySelect}
          icon={OriginPointIcon}
          sendSelectedOption={(selectedOption) =>
            setForms({ ...forms, city: selectedOption })
          }
        />

        <SelectFilter
          selectData={transportSelect}
          icon={TransportIcon}
          sendSelectedOption={(selectedOption) =>
            setForms({ ...forms, transport: selectedOption })
          }
        />
      </div>
    </>
  );
};

export default TargetDriverFilters;
