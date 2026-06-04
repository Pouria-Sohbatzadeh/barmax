import useLightStore from "../../../stores/useLightStore";
import Checkbox from "@mui/material/Checkbox";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SelectAllFilteredDrivers = () => {
  const { light } = useLightStore();

  return (
    <div
      className={`w-full flex justify-between items-center p-5 pr-4 pl-4 ${
        light ? "bg-[#f9fafc]" : "bg-[#0e1b2b] shadow-md"
      } rounded-full`}
    >
      <div className="flex items-center gap-2">
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <span className="text-[#b0b1b5] text-[14px]">
          انتخاب همه رانندگان (براساس فیلتر)
        </span>
      </div>

      <span>تعداد انتخاب شده: 0</span>
    </div>
  );
};

export default SelectAllFilteredDrivers;
