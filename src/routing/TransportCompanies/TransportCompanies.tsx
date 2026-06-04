import { useState } from "react";

import Box from "../../component/Box";
import TitleFilter from "../../component/TitleFilter";
import Button from "../../component/Button";
import SubmitTransportCompanyForm from "./SubmitTransportCompanyForm";
import TransportationTable from "./TransportationTable";

import useTransportSearchStore from "../../stores/useTransportCompanySearchStore";


const TransportCompanies = () => {

  const { setTitleFilter } = useTransportSearchStore();

  const addCompanyBtnDetails = {
    btnTxt: "افزودن افراتور",
    btnFnc: () => {
      setIsForm(true);
    },
  };

  const [isForm, setIsForm] = useState(false);

  return (
    <>
      <Box>
        <div className="flex justify-between items-center w-full">
          <TitleFilter
            plcHolder="جستجو بر اساس نام و شماره تماس..."
            titleFilter={setTitleFilter}
            className="w-[350px]"
          />

          <Button
            type={undefined}
            className="gap-3 pt-[14px] pb-[14px]"
            btnDetails={addCompanyBtnDetails}
          >
            <div className="p-[2px]  border border-white rounded-md flex justify-center items-center">
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
          </Button>
        </div>

        <TransportationTable />

      </Box>

      <SubmitTransportCompanyForm
        visibility={isForm}
        submitDetail={addCompanyBtnDetails}
        closeForm={() => setIsForm(false)}
      />
    </>
  );
};

export default TransportCompanies;
