
import useLightStore from "../../stores/useLightStore";


import LetMeKnowsTablesRows from "./LetMeKnowsTablesRows";

const LetMeKnowTable = () => {


  const { light } = useLightStore();

  return (
    <>
      <table className="w-full text-[14px] border-separate border-spacing-y-4">
        <thead className="w-full  text-[#6e7178]">
          <tr className="w-full ">
            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              } rounded-tr-full rounded-br-full`}
            >
              راننده
            </td>

            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              }`}
            >
              مبدا
            </td>
            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              }`}
            >
              مقصد
            </td>
            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              }`}
            >
              ناوگان
            </td>

            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              }`}
            >
              زمان ثبت
            </td>

            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              } text-[#f9fafc] rounded-tl-full rounded-bl-full`}
            ></td>
          </tr>
        </thead>
        <tbody className="w-full ">
          <LetMeKnowsTablesRows />
        </tbody>
      </table>

    </>
  );
};

export default LetMeKnowTable;
