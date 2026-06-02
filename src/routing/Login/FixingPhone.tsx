import React from "react";

interface Props {
  isVisible: boolean;
  handle: () => void;
}

const FixingPhone = ({ isVisible, handle }: Props) => {
  return (
    <>
      {isVisible && (
        <div className="w-full border-t border-[#a2a5ae] mt-4 pt-3 flex justify-center">
          <button
            onClick={handle}
            className="text-[#a4a7ae] flex justify-center relative"
          >
            <span>تصحیح شماره تماس</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 absolute top-[50%] translate-y-[-50%] left-[105%]"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default FixingPhone;
