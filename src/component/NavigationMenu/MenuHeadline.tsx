interface Props {
  isOpen: boolean;
  changeIsOpen: () => void;
}

const MenuHeadline = ({ isOpen, changeIsOpen }: Props) => {
  return (
    <>
      <div
        className={`flex ${
          isOpen ? "justify-between" : "justify-center"
        } items-center`}
      >
        {isOpen && (
          <div className="flex flex-col items-start">
            <h2 className="text-[24px] font-bold">بارمکث</h2>
            <span className="text-[14px]">پنل شرکت‌های باربری</span>
          </div>
        )}

        <button
          onClick={changeIsOpen}
          className="rounded-full border border-white w-[30px] h-[30px] flex relative outline-none"
        >
          {isOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          )}

          {!isOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default MenuHeadline;
