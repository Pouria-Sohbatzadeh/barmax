interface Props {
  visibility: boolean;
  setSingleAdd?: () => void,
  setExcelAdd?: () => void
}

const AddDriverPopup = ({ visibility, setSingleAdd, setExcelAdd }: Props) => {
  return (
    <>
      {visibility && (
        <div className="absolute top-[100%] rounded-2xl left-0 min-w-[265px] bg-white shadow-md ">
          <button onClick={setSingleAdd} className="w-full h-[50px] flex gap-2 items-center  p-4 pr-5 pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#536dfe]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span>افزودن راننده تکی</span>
          </button>
          <button onClick={setExcelAdd} className="w-full h-[50px] flex gap-2 items-center  p-4 pr-5 pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#536dfe]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
              />
            </svg>

            <span>افزودن با فایل اکسل</span>
          </button>
        </div>
      )}
    </>
  );
};

export default AddDriverPopup;





// interface Props {
//   visibility: boolean;
//   setSingleAdd?: () => void;
//   setExcelAdd?: (file: File) => void;
// }

// const AddDriverPopup = ({
//   visibility,
//   setSingleAdd,
//   setExcelAdd,
// }: Props) => {
//   return (
//     <>
//       {visibility && (
//         <div className="absolute top-[100%] rounded-2xl left-0 min-w-[265px] bg-white shadow-md">
//           <button
//             onClick={setSingleAdd}
//             className="w-full h-[50px] flex gap-2 items-center p-4 pr-5 pl-5"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-6 text-[#536dfe]"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//               />
//             </svg>

//             <span>افزودن راننده تکی</span>
//           </button>

//           <label
//             htmlFor="excel-file"
//             className="w-full h-[50px] flex gap-2 items-center p-4 pr-5 pl-5 cursor-pointer"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-6 text-[#536dfe]"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
//               />
//             </svg>

//             <span>افزودن با فایل اکسل</span>
//           </label>

//           <input
//             id="excel-file"
//             type="file"
//             accept=".xlsx,.xls"
//             className="hidden"
//             onChange={(e) => {
//               const file = e.target.files?.[0];

//               if (!file) return;

//               setExcelAdd?.(file);
//             }}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default AddDriverPopup;