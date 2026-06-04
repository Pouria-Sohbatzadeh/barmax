import type { ReactNode } from "react";
import useLightStore from "../stores/useLightStore";

interface Props {
  children: ReactNode;
  className?: string;
}
const Box = ({ children, className }: Props) => {
  const { light } = useLightStore();

  return (
    <div
      className={`w-full p-[25px] flex flex-col pr-[25px] pl-[25px] rounded-[24px] shadow-md ${
        light ? "bg-white" : "bg-[#1b263a]"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
