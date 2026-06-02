import useLightStore from "../../stores/useLightStore";

import HeaderNotificationIcon from "../../Icons/HeaderIcons/HeaderNotificationIcon";

interface Props {
  handle?: () => void;
}

const NotificationBTN = ({
  handle,
}: Props) => {
  const { light } = useLightStore();

  return (
    <button
      onClick={handle}
      className={`aspect-square w-[40px] ${
        light ? "bg-[#f9fafc]" : "bg-[#0c1a27] border-[#212c3e]"
      } border border-transparent rounded-full flex items-center justify-center`}
    >
      <HeaderNotificationIcon
        className={`size-5 ${light ? "text-black" : "text-white"}`}
      />
    </button>
  );
};

export default NotificationBTN;
