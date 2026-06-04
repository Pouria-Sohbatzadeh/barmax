import { ComponentType } from "react";
import useLightStore from "../stores/useLightStore";

export interface Option {
  value: string;
  optTxt: string;
}

interface IconProps {
  className?: string;
}

interface Props {
  selectData: {
    lblTxt: string;
    id: string;
    options: Option[];
  };
  className?: string;
  sendSelectedOption: (option: string) => void;
  icon: ComponentType<IconProps>;
}

const SelectFilter = ({
  selectData,
  sendSelectedOption,
  className,
  icon: Icon,
}: Props) => {
  const { light } = useLightStore();

  return (
    <div
      className={`relative overflow-hidden ${
        className ? className : "w-[171px]"
      }  h-[50px]   rounded-3xl border ${
        light ? "border-[#f5f5f7]" : "border-transparent shadow-md"
      }  flex items-center gap-2 `}
    >
      {Icon && (
        <Icon className="size-6 absolute right-3 text-[#818286] pointer-events-none" />
      )}

      <select
        defaultValue=""
        onChange={(event) => sendSelectedOption(event.target.value)}
        id={selectData.id}
        className={`appearance-none outline-none text-[14px] w-full h-[50px] cursor-pointer text-[#818286] pr-10 pl-4 ${
          light ? "" : "bg-[#0e1b2b]"
        }`}
      >
        <option value="" disabled>
          {selectData.lblTxt}
        </option>

        {selectData.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.optTxt}
          </option>
        ))}
      </select>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4 absolute top-[55%] translate-y-[-50%] left-4 text-[#818286]  pointer-events-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default SelectFilter;
