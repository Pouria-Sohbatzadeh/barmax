import { useState } from "react";

import useLetMeKnowStore from "../../stores/useLetMeKnowsStore";
import useLightStore from "../../stores/useLightStore";
import ConfirmDelete from "../../component/ConfirmDelete";

export interface LetMeknow {
  id: number;
  title: string;
  phone: string;
  origin: string;
  destination: string;
  vehicle: string;
  startingTonnage: string;
  endingTonnage: string;
  startingPrice: string;
  endingPrice: string;
  submitTime: string;
}

interface Props {
  LetMeknowData: LetMeknow[];
}

const LetMeKnowsTablesRows = () => {
  const { light } = useLightStore();

  const filteredData = useLetMeKnowStore((state) => state.filteredData);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const removeLetMeKnow = useLetMeKnowStore(
    (state) => state.removeLetMeKnow
  );
  
  const handleDelete = () => {
    if (deleteId === null) return;
  
    removeLetMeKnow(deleteId);
    setDeleteId(null);
  };

  return (
    <>
      {filteredData.map((item) => (
        <tr key={item.id}>
          <td className="text-right ">
            <div className="flex items-center gap-4">
              <div className="text-right h-9 w-9 rounded-full flex justify-center items-center bg-[#ebf1ff] text-[#6972e7]">
                {item.title[0]}
              </div>
              <div className="flex flex-col">
                <span>{item.title}</span>
                <span className="text-[14px] text-[#6e7178]">{item.phone}</span>
              </div>
            </div>
          </td>

          <td className="text-center">
            <div className="bg-[#dbfde5] text-green-700 rounded-full">
              {item.origin}
            </div>
          </td>

          <td className="text-center">
            <div className="bg-[#fef3ef] text-red-700 rounded-full">
              {item.destination}
            </div>
          </td>

          <td className="text-center">{item.vehicle}</td>

          <td className="text-center">{item.submitTime}</td>

          <td className="text-center">
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
          subject="باخبر شو"
        />
      )}
    </>
  );
};

export default LetMeKnowsTablesRows;
