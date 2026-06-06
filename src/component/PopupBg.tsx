import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PopupBg = ({ children }: Props) => {
  return (
    <>
      <div className="absolute left-0 top-0 w-full z-10 h-full bg-[#000000d2] backdrop-blur-sm">
        {children}
      </div>
    </>
  );
};

export default PopupBg;
