import axios from "axios";
import { useEffect, useState } from "react";

const CargoTable = () => {
  const [CargoData, setCargoData] = useState("");

  const [isError, setIsError] = useState("");

  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://api.barmax.ir/api/v2/cargos")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => setIsError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <table className="w-full text-[14px] border-separate border-spacing-y-4">
        <thead className="w-full  text-[#6e7178]">
          <tr className="w-full ">
            <td className="text-center pt-4 pb-4 bg-[#f9fafc] rounded-tr-full rounded-br-full">
              عنوان
            </td>
            <td className="text-center pt-4 pb-4 bg-[#f9fafc]">مبدا</td>
            <td className="text-center pt-4 pb-4 bg-[#f9fafc]">مقصد</td>
            <td className="text-center pt-4 pb-4 bg-[#f9fafc]">ناوگان</td>
            <td className="text-center pt-4 pb-4 bg-[#f9fafc]">تناژ</td>
            <td className="text-center pt-4 pb-4 bg-[#f9fafc]">قیمت</td>
            <td className="text-center pt-4 pb-4 bg-[#f9fafc] text-[#f9fafc] rounded-tl-full rounded-bl-full">

            </td>
          </tr>
        </thead>
        <tbody className="w-full ">
          <tr className="">
            <td className="text-center">بار سیمان به مشهد</td>
            <td className="text-center "> <div className="bg-[#dbfde5] text-green-700 rounded-full">باسمنج</div></td>
            <td className="text-center "><div className="bg-[#fef3ef] text-red-700 rounded-full">بخشایش</div></td>
            <td className="text-center">خاور اتاق چوبی روباز</td>
            <td className="text-center">تناژ آزاد</td>
            <td className="text-center">500,000 تومان</td>
            <td className="text-center">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
      {isError && <span>{isError}</span>}
    </>
  );
};

export default CargoTable;
