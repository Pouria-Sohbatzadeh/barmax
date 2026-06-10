import { Outlet, useLocation } from "react-router";
import Header from "../component/Header/Header";
import NavigationMenu from "../component/NavigationMenu/NavigationMenu";

import useLightStore from "../stores/useLightStore";

const Layout = () => {
  const { light } = useLightStore();

  const location = useLocation();

  return (
    <>
      <div
        className={`p-3 pb-0 flex justify-between gap-[15px] w-full min-h-[100vh] ${
          light ? "bg-[#f9fafc] text-black" : "bg-[#0e1b2b] text-white"
        } `}
      >
        {location.pathname !== "/login" && <NavigationMenu />}

        <div className="flex flex-col flex-grow">
          {location.pathname !== "/login" && <Header />}

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
