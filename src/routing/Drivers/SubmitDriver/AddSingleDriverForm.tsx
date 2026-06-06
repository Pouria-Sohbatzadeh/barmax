import CancelBtn from "../../../component/CancelBtn";
import SubmitInput from "../../../component/SubmitInput";
import PhoneIcon from "../../../Icons/SubmitCargoIcons/PhoneIcon";
import UserIcon from "../../../Icons/UserIcon";
import Button from "../../../component/Button";
import useLightStore from "../../../stores/useLightStore";
import { CreditCard } from "@mui/icons-material";
import PopupBg from "../../../component/PopupBg";
import SelectFilter from "../../../component/SelectFilter";
import TransportIcon from "../../../Icons/CargoSelectFilters/TransportIcon";
import OriginPointIcon from "../../../Icons/CargoSelectFilters/OriginPointIcon";
import useCargoStore from "../../../stores/useCargoStore";

interface SubmitBtn {
  btnTxt: string;
  btnFnc?: () => void;
}

interface Props {
  visibility: boolean;
  submitDetail?: SubmitBtn;
  closeForm: () => void;
}

const AddSingleDriverForm = ({ visibility = true, submitDetail, closeForm }: Props) => {
  const { light } = useLightStore();

  const updateFilter = useCargoStore((state) => state.updateFilter);

  const originPointSelect = {
    lblTxt: "فیلتر شهر",
    id: "origin",
    options: [
      { value: "زاهدان", optTxt: "زاهدان" },
      { value: "تهران", optTxt: "تهران" },
    ],
  };

  const transportSelect = {
    lblTxt: "فیلتر ناوگان",
    id: "transport",
    options: [
      { value: "خودرو", optTxt: "خودرو" },
      { value: "کامیون", optTxt: "کامیون" },
    ],
  };

  return (
    <>
      {visibility && (
        <PopupBg>
          <form
            className={`flex flex-col justify-between rounded-3xl absolute left-3 top-3 p-4 pl-6 pr-6 h-[97.5vh] ${
              light ? "bg-[#f9fafc]" : "bg-[#1b263a]"
            } w-[365px]`}
          >
            <div className="self-center flex flex-col gap-6 w-full">
              <div className="flex flex-col items-center gap-4">
              <h1 className="text-[24px] font-bold">
                افزودن راننده
              </h1>
              <SubmitInput
                inputType="text"
                plcHolder="حرف"
                className="w-[80%]"
                inputClass={`${light ? "bg-white" : "bg-[#0e1b2b]"} placeholder:relative placeholder:text-[20px] placeholder:right-[100px]`}
              />
              </div>
              

              <SubmitInput
                icon={UserIcon}
                inputType="text"
                plcHolder="نام"
                className="w-full mt-8"
                inputClass={`${light ? "bg-white" : "bg-[#0e1b2b]"}`}
              />

              <SubmitInput
                icon={UserIcon}
                inputType="text"
                plcHolder="نام خانوادگی"
                className="w-full"
                inputClass={`${light ? "bg-white" : "bg-[#0e1b2b]"}`}
              />

              <SelectFilter
                selectData={originPointSelect}
                icon={OriginPointIcon}
                sendSelectedOption={(selectedOption) =>
                  updateFilter("origin", selectedOption)
                }
                className="w-full"
              />

              <SelectFilter
                selectData={transportSelect}
                icon={TransportIcon}
                sendSelectedOption={(selectedOption) =>
                  updateFilter("transport", selectedOption)
                }
                className="w-full"
              />

              <SubmitInput
                icon={PhoneIcon}
                iconClass="left-3"
                inputType="tel"
                plcHolder="شماره تماس"
                className="w-full"
                inputClass={`${light ? "bg-white" : "bg-[#0e1b2b]"}`}
              />

              <SubmitInput
                icon={CreditCard}
                inputType="number"
                plcHolder="کد ملی"
                className="w-full"
                inputClass={`${light ? "bg-white" : "bg-[#0e1b2b]"}`}
              />
            </div>

            <div className="flex gap-2">
              <CancelBtn handleCancel={closeForm} />

              <Button
                type="submit"
                className="gap-3 pt-[14px] pb-[14px]"
                btnDetails={submitDetail}
              >
                <div className="p-[2px] border border-white rounded-md flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>افزودن</span>
              </Button>
            </div>
          </form>
        </PopupBg>
      )}
    </>
  );
};

export default AddSingleDriverForm;
