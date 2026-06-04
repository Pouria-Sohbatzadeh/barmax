import { useState } from "react";
import useLightStore from "../../stores/useLightStore";

import TransportationTableRows from "./TransportationTableRows";

const TransportationTable = () => {
  const { light } = useLightStore();

  const [isDelete, setIsDelete] = useState(false);

  return (
    <table className="w-full text-[14px] border-separate border-spacing-y-4">
      <thead className="w-full  text-[#6e7178]">
        <tr className="w-full ">
          <td
            className={`text-center pt-4 pb-4 ${
              light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
            } text-[#f9fafc] rounded-tr-full rounded-br-full`}
          ></td>

          <td
            className={`text-center pt-4 pb-4 ${
              light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
            } `}
          >
            اپراتور
          </td>
          <td
            className={`text-center pt-4 pb-4 ${
              light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
            } `}
          >
            عنوان
          </td>
          <td
            className={`text-center pt-4 pb-4 ${
              light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
            } `}
          >
            سرویس امروز
          </td>
          <td
            className={`text-center pt-4 pb-4 ${
              light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
            } `}
          >
            کل سرویس ها
          </td>

          <td
            className={`text-center pt-4 pb-4 ${
              light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
            } text-[#f9fafc] rounded-tl-full rounded-bl-full`}
          ></td>
        </tr>
      </thead>
      <tbody className="w-full ">
        <TransportationTableRows />
      </tbody>
    </table>
  );
};

export default TransportationTable;
