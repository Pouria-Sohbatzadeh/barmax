import { ComponentType } from "react";
import useLightStore from "../../../stores/useLightStore";

interface IconProps {
  className?: string;
}

interface Props {
  plcHolder: string;
  className?: string;
  inputType: string;
  icon: ComponentType<IconProps>;
}

const SubmitCargoInput = ({
  plcHolder,
  className,
  icon: Icon,
  inputType,
}: Props) => {
  const { light } = useLightStore();

  return (
    <div className={`relative  ${className}`}>
      {Icon && (
        <Icon className="size-6 absolute top-[50%] translate-y-[-50%] right-4 text-[#818286] pointer-events-none" />
      )}

      <input
        type={inputType}
        placeholder={plcHolder}
        className={` p-4 pr-12 pl-11 w-full rounded-3xl ${
          light ? "bg-[#f9fafc]" : "bg-[#0e1b2b] shadow-md"
        }  placeholder:text-[#b0b1b5] text-[12px]`}
      />
    </div>
  );
};

export default SubmitCargoInput;
