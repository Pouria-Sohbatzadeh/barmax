import useLightStore from "../../stores/useLightStore";
import { useMatches } from "react-router";

import ModeSwitchBTN from "./ModeSwitchBTN";

import MoonIcon from "../../Icons/HeaderIcons/MoonIcon";
import SunIcon from "../../Icons/HeaderIcons/SunIcon";
import HeaderNotificationIcon from "../../Icons/HeaderIcons/HeaderNotificationIcon";
import NotificationBTN from "./NotificationBTN";
import Credits from "./Credits";
import TransportationCompany from "./TransportationCompany";

const Header = () => {
  const { light, changeMode } = useLightStore();

  const matches = useMatches();

  const currentMatch = matches[matches.length - 1];

  const handle =
    (currentMatch?.handle as {
      title?: string;
      parentTitle?: string;
    }) || {};

  const title = handle.title || "داشبورد";
  const parentTitle = handle.parentTitle;

  return (
    <div
      className={`text-2xl w-full ${
        light ? "bg-white" : "bg-[#1b263a]"
      } shadow-md flex items-center justify-between rounded-[32px] h-[65px] p-[12.5px] pr-[25px] pl-[25px] mb-10`}
    >
      <h3 className="text-[16px] flex items-center gap-1">
        {parentTitle ? (
          <>
            <span className="text-[#536dfe]">{parentTitle}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>

            <span className={light ? "text-black" : "text-white"}>{title}</span>
          </>
        ) : (
          <span className="text-[#536dfe]">{title}</span>
        )}
      </h3>

      <div className="flex items-center h-full">
        <div className="flex items-center gap-2 h-full">
          <ModeSwitchBTN
            iconMoon={MoonIcon}
            iconSun={SunIcon}
            handleMode={changeMode}
          />

          <NotificationBTN />
        </div>

        <Credits />

        <TransportationCompany />
      </div>
    </div>
  );
};

export default Header;
