import type { ReactNode } from "react";

interface Props {
  btnDetails?: {
    btnTxt: string;
    btnFnc?: () => void;
  };
  className?: string;
  children?: ReactNode;
  type: "submit" | "reset" | "button" | undefined
}

const Button = ({ children, btnDetails, className, type }: Props) => {
  return (
    <button
    type={type}
      onClick={() => btnDetails?.btnFnc}
      className={`bg-[#536dfe] text-white flex justify-center items-center rounded-3xl w-[161px] text-[14px] cursor-pointer ${className}`}
    >
      {btnDetails?.btnTxt && btnDetails.btnTxt}
      {children && children}
    </button>
  );
};

export default Button;
