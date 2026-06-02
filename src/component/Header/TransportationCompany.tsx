import UserIcon from "../../Icons/UserIcon";

const TransportationCompany = () => {
  return (
    <div className="h-full mr-[19px] flex items-center gap-2">
      <div className="h-full flex justify-center items-center w-[40px] rounded-full bg-[#516dfd]">
        <UserIcon className="size-4 text-white" />
      </div>

      <div className="flex flex-col h-full justify-between">
        <span className="text-[15px] relative bottom-[6px]">شرکت باربری</span>
        <span className="text-[12px] text-[#516dfd] relative bottom-[16px]">
          09918121399
        </span>
      </div>

      <button className="flex justify-center items-center mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 text-[#65666a]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default TransportationCompany;
