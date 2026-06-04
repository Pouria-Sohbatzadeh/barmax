
import useLightStore from "../stores/useLightStore";

interface Props {
    handleCancel?: () => void
}

const CancelBtn = ({handleCancel}: Props) => {
  const { light } = useLightStore();

  return (
    <button onClick={handleCancel} className={`pt-[14px] pb-[14px] ${light ? "bg-[#e4e7ec]" : "bg-[#e4e7ec] text-[#333a42]"} flex justify-center items-center rounded-3xl w-[161px] text-[16px] font-bold cursor-pointer`}>
      لغو
    </button>
  );
};

export default CancelBtn;
