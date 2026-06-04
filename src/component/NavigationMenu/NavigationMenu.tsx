import { useState } from "react";
import MenuHeadline from "./MenuHeadline";
import NavigationMenuLinks from "./NavigationMenuLinks";

// Icons
import HomeIcon from "../../Icons/NavigationMenuIcon/HomeIcon";
import AnnounceCargoIcon from "../../Icons/NavigationMenuIcon/AnnounceCargoIcon";
import DriversIcon from "../../Icons/NavigationMenuIcon/DriversIcon";
import NotificationIcon from "../../Icons/NavigationMenuIcon/NotificationIcon";
import MassageIcon from "../../Icons/NavigationMenuIcon/MassageIcon";
import TransportCompaniesIcon from "../../Icons/NavigationMenuIcon/TransportCompaniesIcon";

const NavigationMenu = () => {
  const [isOpen, setIsopen] = useState(true);

  const HomeData = [
    {
      path: "/",
      txt: "داشبورد",
      icon: HomeIcon,
    },
  ];

  const middleLinkData = [
    {
      path: "/cargo",
      txt: "سالن اعلام بار",
      icon: AnnounceCargoIcon,
    },
    {
      path: "/drivers",
      txt: "رانندگان",
      icon: DriversIcon,
    },
    {
      path: "/letmeknow",
      txt: "باخبر شو",
      icon: NotificationIcon,
    },
  ];

  const bottomLinkData = [
    {
      path: "/sendMessage",
      txt: "ارسال پیامک",
      icon: MassageIcon,
    },
    {
      path: "/transportCompanies",
      txt: "متصدیان",
      icon: TransportCompaniesIcon,
    },
  ];

  return (
    <ul
      className={`flex flex-col bg-[#536dfe] text-white rounded-3xl p-3 h-[97.5vh] text-right sticky ${
        isOpen ? "w-[256px]" : "w-[80px] pt-7"
      } `}
    >
      {/* Header */}
      <MenuHeadline
        isOpen={isOpen}
        changeIsOpen={() => {
          setIsopen((prev) => !prev);
        }}
      />

      {/* Menu List */}

      <div className="mt-[40px]">
        <NavigationMenuLinks isOpen={isOpen} LinksData={HomeData} />
      </div>

      <div className="mt-[5px] pt-[10px] border-t border-[#647dff]">
        <NavigationMenuLinks isOpen={isOpen} LinksData={middleLinkData} />
      </div>

      <div className="mt-[10px] pt-[10px] border-t border-[#647dff]">
        <NavigationMenuLinks isOpen={isOpen} LinksData={bottomLinkData} />
      </div>
    </ul>
  );
};

export default NavigationMenu;
