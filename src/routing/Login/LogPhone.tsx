import { FormState, UseFormRegister } from "react-hook-form";

import useLightStore from "../../stores/useLightStore";

interface formData {
  phone: string;
  confirmCode: number;
}

interface Props {
  isVisible: boolean;
  register: UseFormRegister<formData>;
  formState: FormState<formData>;
}

const LogPhone = ({ isVisible, register, formState }: Props) => {

  const {light} = useLightStore()

  return (
    <>
      {/* Form */}
      {!isVisible && (
        <div className="relative mt-12 h-[44px]">
          <input
            {...register("phone", {
              required: true,
              minLength: 11,
              maxLength: 13,
              pattern: /^(?:09\d{9}|09\d{2}\s\d{3}\s\d{4})$/,
            })}
            type="tel"
            placeholder="شماره تماس"
            className={` ${light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"} border border-[#f4f5f7] placeholder:text-[#9da1aa] rounded-3xl pr-4 pl-9 w-[311px] h-full outline-none`}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[#9da1aa] size-5 absolute top-[50%] translate-y-[-50%] left-[10px]"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {formState.errors.phone?.type === "pattern" && (
        <div className="text-red-900 mt-4">
          <span className="text-red-700 text-[20px]">شماره معتبر نیست.</span>
        </div>
      )}

      {formState.errors.phone?.type === "required" && (
        <div className="text-red-900 mt-4">
          <span className="text-red-700 text-[20px]">لطفا فرم رو پر کنید.</span>
        </div>
      )}

      {formState.errors.phone?.type === "minLength" && (
        <div className="text-red-900 mt-4">
          <span className="text-red-700 text-[20px]">شمارمتون خیلی کوتاه است.</span>
        </div>
      )}

      {formState.errors.phone?.type === "maxLength" && (
        <div className="text-red-900 mt-4">
          <span className="text-red-700 text-[20px]">شمارمتون خیلی بلند است.</span>
        </div>
      )}
    </>
  );
};

export default LogPhone;
