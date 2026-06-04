import useLightStore from "../stores/useLightStore";

interface Props {
  titleFilter: (title: string) => void;
  plcHolder: string;
  className?: string
  inputClass?: string
}

const TitleFilter = ({ titleFilter, plcHolder, className, inputClass }: Props) => {
  const { light } = useLightStore();

  return (
    <div className={`relative w-[227px] ${className}`}>
      <input
        onChange={(event) => titleFilter(event.target.value)}
        type="text"
        placeholder={plcHolder}
        className={` p-4 pr-2 pl-9 w-full rounded-3xl ${
          light ? "bg-[#f9fafc]" : "bg-[#0e1b2b] shadow-md"
        }  placeholder:text-[#b0b1b5] text-[12px] ${inputClass}`}
      />

      <button className=" pointer-events-none absolute top-[50%] translate-y-[-50%] left-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default TitleFilter;
