import { useState } from "react";

import Box from "../../../component/Box";
import Button from "../../../component/Button";
import CardIcon from "../../../Icons/SubmitCargoIcons/CardIcon";
import PhoneIcon from "../../../Icons/SubmitCargoIcons/PhoneIcon";
import CargoSelectFilter from "../CargoSelectFilter";
import SubmitCargoInput from "./SubmitCargoInput";

import OriginPointIcon from "../../../Icons/CargoSelectFilters/OriginPointIcon";
import TransportIcon from "../../../Icons/CargoSelectFilters/TransportIcon";
import HashTagIcon from "../../../Icons/SubmitCargoIcons/HashTagIcon";
import ShoppingCartIcon from "../../../Icons/SubmitCargoIcons/ShoppingCartIcon";
import InputTabs, { Btn } from "./InputTabs";

const SubmitCargoForm = () => {
  const [originFilter, setOriginFilter] = useState("");

  const originPointSelect = {
    lblTxt: "انتخاب مبدا",
    id: "origin",
    options: [
      { value: "Zahedan", optTxt: "Zahedan" },
      { value: "Tehran", optTxt: "Tehran" },
    ],
  };

  const destinationPointSelect = {
    lblTxt: "انتخاب مقصد",
    id: "destination",
    options: [
      { value: "Zahedan", optTxt: "Zahedan" },
      { value: "Tehran", optTxt: "Tehran" },
    ],
  };

  const [transportFilter, setTransportFilter] = useState("");

  const transportSelect = {
    lblTxt: "انتخاب ناوگان",
    id: "transport",
    options: [
      { value: "Zahedan", optTxt: "Zahedan" },
      { value: "Tehran", optTxt: "Tehran" },
    ],
  };

  const [isFreeTanaj, setIsFreeTanaj] = useState(false);

  const [isNegotiobale, setIsNegotiobale] = useState(false);

  const tanajInputTabs: Btn[] = [
    {
      text: "تناژ مشخص",
      btnFnc: () => setIsFreeTanaj(false),
    },
    {
      text: "تناژ آزاد",
      btnFnc: () => setIsFreeTanaj(true),
    },
  ];

  const weightInputTabs: Btn[] = [
    {
      text: "صافی",
      btnFnc: () => setIsNegotiobale(false),
    },
    {
      text: "توفقی",
      btnFnc: () => setIsNegotiobale(true),
    },
    {
      text: "تن",
      btnFnc: () => setIsNegotiobale(false),
    },
  ];

  return (
    <Box>
      <form action="" className="w-full h-full flex flex-col gap-[60px]">
        <div className="w-full h-full flex flex-col gap-7">
          <div className="w-full flex gap-4 justify-between">
            <SubmitCargoInput
              icon={CardIcon}
              inputType="text"
              plcHolder="عنوان بار"
              className="w-full"
            />

            <SubmitCargoInput
              icon={PhoneIcon}
              inputType="tel"
              plcHolder="شماره تماس"
              className="w-full"
            />
          </div>

          <div className="flex gap-3 justify-between">
            <CargoSelectFilter
              selectData={originPointSelect}
              icon={OriginPointIcon}
              sendSelectedOption={(selectedOption) =>
                setOriginFilter(selectedOption)
              }
              className="flex-grow"
            />

            <CargoSelectFilter
              selectData={destinationPointSelect}
              icon={OriginPointIcon}
              sendSelectedOption={(selectedOption) =>
                setTransportFilter(selectedOption)
              }
              className="flex-grow"
            />

            <CargoSelectFilter
              selectData={transportSelect}
              icon={TransportIcon}
              sendSelectedOption={(selectedOption) =>
                setTransportFilter(selectedOption)
              }
              className="flex-grow"
            />
          </div>

          <div className="w-full flex gap-4 justify-between">
            <div className="w-full flex flex-col gap-2">
              
              <InputTabs btnsDetails={tanajInputTabs} />
              
              <SubmitCargoInput
                disabled={isFreeTanaj}
                plcHolder="0"
                inputType="number"
                className="w-full"
                icon={HashTagIcon}
              />
            </div>

            <div className="w-full flex flex-col gap-2">

            <InputTabs btnsDetails={weightInputTabs} />
            
              <SubmitCargoInput
                disabled={isNegotiobale}
                plcHolder="0"
                inputType="number"
                className="w-full"
                icon={ShoppingCartIcon}
              />
            </div>
          </div>

          <SubmitCargoInput
            icon={CardIcon}
            inputType="text"
            plcHolder="توضیحات"
            className="w-full"
          />
        </div>

        <div className="self-end flex items-center gap-2">
          <button className="pt-[14px] pb-[14px] bg-[#e4e7ec]  flex justify-center items-center rounded-3xl w-[161px] text-[16px] font-bold cursor-pointer">
            لغو
          </button>
          <Button type="submit" className="gap-3 pt-[14px] pb-[14px]">
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

            <span>ثبت بار</span>
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default SubmitCargoForm;
