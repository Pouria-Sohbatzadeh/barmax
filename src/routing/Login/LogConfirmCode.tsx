import { UseFormRegister } from "react-hook-form";

import useLightStore from "../../stores/useLightStore";

interface formData {
  phone: string;
  confirmCode: number;
}

interface Props {
  isVisible: boolean;
  register: UseFormRegister<formData>;
  enteredPhone: string,
  validationCode: number|undefined
}

interface formData {
  phone: string;
}

const LogConfirmCode = ({ isVisible, register, enteredPhone, validationCode }: Props) => {

  const {light} = useLightStore()

  return (
    <>
      {isVisible && (
        <div className="w-full flex flex-col gap-6 items-center mt-8">
          <div className={`${light ? "bg-[#f9fafc]" : "bg-[#0e1b2b] border-[#a2a5ae]"} border border-transparent rounded-xl p-2 w-full flex justify-center items-center`}>
            <span className="text-[15px] text-[#a2a5ae] ">
              کد تایید به شماره{" "}
              <span className="text-[#536dfe]" dir="ltr">
                {enteredPhone}
              </span>{" "}
              ارسال شد.
            </span>
          </div>
          <input
          placeholder="کد را وارد کنید"
            {...register("confirmCode", {
              required: true,
              minLength: 4,
              maxLength: 4,
              validate: (value) => Number(value) === validationCode,
            })}
            type="number"
            className="border border-[#a2a5ae] outline-none p-8 pr-0 pt-1 pb-1 rounded-3xl w-[170px]"
            dir="ltr"
          />
        </div>
      )}
    </>
  );
};

export default LogConfirmCode;
