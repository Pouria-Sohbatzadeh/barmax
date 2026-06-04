import { useState } from "react";

export interface Btn {
  text: string;
  btnFnc: () => void;
}

interface Props {
  btnsDetails: Btn[];
}

const InputTabs = ({ btnsDetails }: Props) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="flex items-center gap-2">
      {btnsDetails.map((btn, index) => (
        <button
          key={index}
          type="button"
          onClick={() => {
            setIsActive(index);
            btn.btnFnc();
          }}
          className={`flex justify-center items-center rounded-full p-3 pr-6 pl-6  ${
            isActive === index
              ? "bg-[#536dfe] text-white"
              : "bg-[#f9fafc]"
          }`}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
};

export default InputTabs;