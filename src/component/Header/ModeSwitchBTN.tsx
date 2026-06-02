import useLightStore from "../../stores/useLightStore";

interface Props {
  handleMode: () => void;
  iconMoon: React.ElementType;
  iconSun: React.ElementType;
}

const ModeSwitchBTN = ({
  handleMode,
  iconMoon: IconMoon,
  iconSun: IconSun,
}: Props) => {

  const {light} = useLightStore()

  return (
    <button
      onClick={handleMode}
      className={`h-[40px] w-[40px] ${light ? "bg-[#f9fafc]" : "bg-[#0c1a27] border-[#212c3e]"} border border-transparent rounded-full flex items-center justify-center `}
    >
      {light && <IconMoon className="size-5 text-black" />}
      {!light && <IconSun className="size-6 text-[#ffefb7]" />}
    </button>
  );
};

export default ModeSwitchBTN;
