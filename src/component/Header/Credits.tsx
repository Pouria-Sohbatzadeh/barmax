import CreditIcon from "../../Icons/CreditIcon";


const Credits = () => {
  return (
    <div className="mr-[20px] h-full rounded-3xl pr-5 pl-5 bg-[#02e57a] text-white flex justify-center items-center gap-[6px]">
      <CreditIcon className="size-4" />

      <div className="text-[14px]">
        <span>اعتبار: </span>
        <span>0 تومان</span>
      </div>
    </div>
  );
};

export default Credits;
