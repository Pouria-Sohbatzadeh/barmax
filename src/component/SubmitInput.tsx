import { ComponentType, ChangeEventHandler } from "react";
import useLightStore from "../stores/useLightStore";

interface IconProps {
  className?: string;
}

interface Props {
  plcHolder: string;
  className?: string;
  inputType: string;
  inputClass?: string
  icon?: ComponentType<IconProps>;
  iconClass?: string;
  disabled?: boolean;

  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const SubmitInput = ({
  plcHolder,
  className,
  icon: Icon,
  iconClass,
  inputType,
  inputClass,
  disabled,
  value,
  onChange,
}: Props) => {
  const { light } = useLightStore();

  return (
    <div className={`relative ${className}`}>
      {Icon && (
        <Icon
          className={`size-6 absolute top-[50%] translate-y-[-50%] ${
            iconClass ? iconClass : "right-4"
          } text-[#818286] pointer-events-none`}
        />
      )}

      <input
        disabled={disabled}
        type={inputType}
        placeholder={plcHolder}
        value={value}
        onChange={onChange}
        className={`p-4 pr-12 pl-11 w-full rounded-3xl ${
          light ? "bg-[#f9fafc]" : "bg-[#0e1b2b] shadow-md"
        } placeholder:text-[#b0b1b5] text-[12px] ${inputClass}`}
      />
    </div>
  );
};

export default SubmitInput;
