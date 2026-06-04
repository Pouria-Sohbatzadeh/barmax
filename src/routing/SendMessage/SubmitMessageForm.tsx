import React, { useState } from "react";
import Box from "../../component/Box";
import Button from "../../component/Button";
import useLightStore from "../../stores/useLightStore";

const SubmitMessageForm = () => {
  const [message, setMessage] = useState("");

  const { light } = useLightStore();
  return (
    <Box className={`w-full !rounded-2xl !p-4 border-[2px] ${light ? "border-[#f5f5f7] " : " shadow-md border-transparent"}`}>
      <div className="mb-4 flex flex-col gap-1">
        <h2 className="text-[20px] font-bold">ارسال پیامک</h2>
        <span className="text-[13px] text-[#767980]">متن پیام را وارد کنید و ارسال بزنید.</span>
      </div>
      <form>
        <textarea
          onChange={(event) => setMessage(event.target.value)}
          maxLength={500}
          className={`p-4 pr-7 pl-7 rounded-3xl ${
            light ? "bg-[#f9fafc] border-[#f5f5f7]" : "bg-[#0e1b2b] border-transparent shadow-md"
          } placeholder:text-[#b0b1b5] w-full h-[338px] border-[2px] `}
          placeholder="متن پیام..."
        />

        <div className="mt-12 mb-4 w-full flex justify-between items-center text-[#b0b1b5] text-[14px]">
          <span>{message.length} / 500</span>
          <span>ارسال به رانندگان انتخاب شده</span>
        </div>

        <Button
          disabled={message.length === 0}
          type="submit"
          btnDetails={{ btnTxt: "ارسال پیامک" }}
          className="gap-2 pt-[14px] pb-[14px] w-full rounded-full text-[16px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Button>
      </form>
    </Box>
  );
};

export default SubmitMessageForm;
