import { useState } from "react";
import ConfirmDelete from "../../component/ConfirmDelete";
import useLightStore from "../../stores/useLightStore";
import useTransportSearchStore from "../../stores/useTransportCompanySearchStore";

const TransportationTableRows = () => {
  const { light } = useLightStore();

  const { titleFilter } = useTransportSearchStore();

  const [transportationData, setTransportationData] = useState([
    {
      id: 1,
      title: "اپراتور شماره یک",
      phone: "09303712893",
      company: "-",
      sentCount: 0,
      receivedCount: 0,
    },
    {
      id: 2,
      title: "اپراتور شماره دو",
      phone: "09123456789",
      company: "-",
      sentCount: 0,
      receivedCount: 0,
    },
  ]);

  const filteredData = transportationData.filter(
    (item) =>
      item.title.includes(titleFilter) || item.phone.includes(titleFilter)
  );

  // Which row is being deleted?
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleDelete = () => {
    setTransportationData((prev) =>
      prev.filter((item) => item.id !== deleteId)
    );

    setDeleteId(null);
  };

  return (
    <>
      {filteredData.map((item) => (
        <tr key={item.id}>
          <td className="text-center">
            <div
              className={`h-9 w-9 flex justify-center items-center text-[#7f87f6] ${
                light ? "bg-[#edf0ff]" : "bg-[#0E1B2B]"
              } rounded-full`}
            >
              <span className="relative top-[1px]">{item.id}</span>
            </div>
          </td>

          <td className="text-center">
            <div className="flex flex-col items-start">
              <span>{item.title}</span>

              <span dir="ltr" className="text-[#6e7178] text-[14px]">
                {item.phone}
              </span>
            </div>
          </td>

          <td className="text-center">{item.company}</td>

          <td className="text-center">{item.sentCount}</td>

          <td className="text-center">{item.receivedCount}</td>

          <td className="flex justify-center items-center">
            <button
              onClick={() => setDeleteId(item.id)}
              className={`h-9 w-9 flex justify-center items-center ${
                light ? "bg-[#fff2f2]" : "bg-[#0E1B2B]"
              } rounded-full`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-red-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </td>
        </tr>
      ))}

      {deleteId !== null && (
        <ConfirmDelete
          handleConfirm={handleDelete}
          handleCancel={() => setDeleteId(null)}
          subject="اپراتور"
        />
      )}
    </>
  );
};

export default TransportationTableRows;
