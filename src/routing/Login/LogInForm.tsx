import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LogPhone from "./LogPhone";
import FixingPhone from "./FixingPhone";
import LogConfirmCode from "./LogConfirmCode";
import useLightStore from "../../stores/useLightStore";

interface formData {
  phone: string;
  confirmCode: number;
}

const LogInForm = () => {
  const { light } = useLightStore();

  const { register, watch, handleSubmit, formState } = useForm<formData>();

  const [isValid, setIsValid] = useState({
    phone: false,
    confirmCode: false,
  });
  const phoneNumber = watch("phone");

  const [validationCode, setValidationCode] = useState<number>();

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((current) => current - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  const enteredCode = watch("confirmCode");

  useEffect(() => {
    if (timeLeft !== 0) return;

    if (isValid.phone && Number(enteredCode) !== validationCode) {
      setIsValid((current) => ({
        ...current,
        phone: false,
      }));
    }
  }, [timeLeft, enteredCode, validationCode, isValid.phone]);

  return (
    <>
      {(isValid.phone && timeLeft >= 116) && (
        <div className="absolute left-14 rounded-2xl p-3 pr-5 pl-5 top-1 bg-[#8ae447] text-[16px] flex items-center justify-center gap-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>

          <span>کد ورود برای شماره تلفن شما ارسال شد.</span>
        </div>
      )}

      <form
        className={`pt-6 pb-5 pr-6 pl-6 flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
          light ? "bg-white" : "bg-[#1b263a]"
        }  w-[396px] rounded-xl shadow-md`}
        onSubmit={handleSubmit((data) => {
          setIsValid({ ...isValid, phone: true });

          setTimeLeft(120);

          setValidationCode(Math.floor(Math.random() * 9000) + 1000);

          if (data.confirmCode) {
            console.log("Success!");
          }
        })}
      >
        {/* <span>{validationCode}</span> */}

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-[#536dfe] text-[24px] leading-0">بارمکث</h2>
          <span>پنل مدیریت شرکت‌های باربری</span>
        </div>

        <LogPhone
          isVisible={isValid.phone}
          register={register}
          formState={formState}
        />

        <LogConfirmCode
          register={register}
          isVisible={isValid.phone}
          enteredPhone={phoneNumber}
          validationCode={validationCode}
        />

        <button
          type="submit"
          className="mt-8 bg-[#536dfe] text-white flex justify-center items-center rounded-xl w-[171px] h-10 text-[16px] cursor-pointer"
        >
          {!isValid.phone && <span>ادامه</span>}
          {isValid.phone && <span>ورود</span>}
        </button>

        {isValid.phone && (
          <div className="text-[#c7ccfd]  mt-6">{formattedTime}</div>
        )}

        <FixingPhone
          isVisible={isValid.phone}
          handle={() => setIsValid({ ...isValid, phone: false })}
        />
      </form>
    </>
  );
};

export default LogInForm;
