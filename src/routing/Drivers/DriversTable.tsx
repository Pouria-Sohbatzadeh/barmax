import axios from "axios";
import { useEffect, useState } from "react";
import useLightStore from "../../stores/useLightStore";
import DriversTablesRows from "./DriversTablesRows";

interface Props {
  tableClass?: string
}

const DriversTable = ({tableClass}: Props) => {



  const [isError, setIsError] = useState("");

  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://api.barmax.ir/api/v2/drivers/current-driver-turn", {
        headers: {
          Authorization: "sanctum",
        },
      })
      .then((res) => {
        console.log(res.data);

      })
      .catch((err) => {
        console.log(err.response?.data);
        setIsError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const { light } = useLightStore();

  return (
    <>
      <table className={`w-full text-[14px] border-separate border-spacing-y-4 ${tableClass}`}>
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
              شماره پلاک
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


              <div className="flex justify-center items-center gap-2  ">
                <span>شهر</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </div>
            </td>
            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              }`}
            >
              <div className="flex justify-center items-center gap-2  ">
                <span>بارهای حمل شده</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </div>
            </td>

            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              } text-[#f9fafc] rounded-tl-full rounded-bl-full`}
            ></td>
          </tr>
        </thead>
        <tbody className="w-full ">
          <DriversTablesRows />
        </tbody>
      </table>
      {isError && <span>{isError}</span>}
    </>
  );
};

export default DriversTable;
