import useLightStore from "../stores/useLightStore";

interface Props {
  handleConfirm: () => void;
  handleCancel: () => void;
  subject: string
}

const ConfirmDelete = ({ handleConfirm, handleCancel, subject }: Props) => {
  const { light } = useLightStore();

  return (
    <div className="left-0 top-0 absolute w-full h-full bg-[#000000d2] backdrop-blur-sm">
      <div
        className={`rounded-3xl ${
          light ? "bg-white" : "bg-[#1B263A]"
        } flex flex-col items-center text-center p-6 max-w-[470px]
        absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
      >
        <h1 className="text-[24px] font-bold">حذف {subject}</h1>

        <p className="text-[#6e7178] text-[14px] mt-4">
          آیا از حذف این {subject} اطمینان دارید؟ این عملیات غیرقابل بازگشت است!
        </p>

        <div className="mt-6 w-full flex items-center gap-2">
          <button
            onClick={handleCancel}
            className={`font-bold rounded-full ${
              light ? "bg-[#f1f2f4]" : "bg-[#e4e7ec] text-[#333a42]"
            } flex-grow h-[41px] flex justify-center items-center`}
          >
            انصراف
          </button>

          <button
            onClick={handleConfirm}
            className="rounded-full bg-[#ff6567] text-white flex-grow h-[41px] flex justify-center items-center"
          >
            تایید
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
