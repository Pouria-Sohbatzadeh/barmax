import type { ReactNode } from "react";

interface Props {
  btnDetails?: {
    btnTxt: string;
    btnFnc?: () => void;
  };
  className?: string;
  children?: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: any
}

const Button = ({ children, btnDetails, className, type, disabled }: Props) => {
  return (
    <button
    disabled={disabled}
      type={type}
      onClick={btnDetails?.btnFnc}
      className={`bg-[#536dfe] text-white flex justify-center items-center rounded-3xl min-w-[161px] text-[14px] cursor-pointer ${className}`}
    >
      {children && children}
      {btnDetails?.btnTxt && btnDetails.btnTxt}
    </button>
  );
};

export default Button;
