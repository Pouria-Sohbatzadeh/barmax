import PopupBg from "../../component/PopupBg";
import CancelBtn from "../../component/CancelBtn";
import Button from "../../component/Button";
import DriversTable from "./DriversTable";

interface SubmitBtn {
  btnTxt: string;
  btnFnc?: () => void;
}

interface Props {
  visibility: boolean;
  submitDetail?: SubmitBtn;
  closeForm: () => void;
}

const ExcelPreview = ({
  visibility = true,
  submitDetail,
  closeForm,
}: Props) => {
  return (
    <>
      {visibility && (
        <PopupBg>
          <div className="bg-white rounded-2xl w-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <div className="w-full h-full flex flex-col justify-between">

                <div className="flex flex-col border-b border-[#6e7178] w-full p-4">
                    <h2 className="text-[20px] font-bold">بازبینی راننده های استخراج شده</h2>
                    <span className="text-[14px] text-[#6e7178]">3 ردیف آماده بررسی</span>
                </div>

                <DriversTable tableClass="p-4" />

              <div className="w-full justify-end flex gap-2 p-4">
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
                  <span>ثبت راننده ها</span>
                </Button>
              </div>
            </div>
          </div>
        </PopupBg>
      )}
    </>
  );
};

export default ExcelPreview;
