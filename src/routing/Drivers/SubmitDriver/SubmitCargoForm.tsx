import { useState } from "react";

import Box from "../../../component/Box";
import Button from "../../../component/Button";
import CardIcon from "../../../Icons/SubmitCargoIcons/CardIcon";
import PhoneIcon from "../../../Icons/SubmitCargoIcons/PhoneIcon";
import SelectFilter from "../../../component/SelectFilter";
import SubmitInput from "../../../component/SubmitInput";

import OriginPointIcon from "../../../Icons/CargoSelectFilters/OriginPointIcon";
import TransportIcon from "../../../Icons/CargoSelectFilters/TransportIcon";
import HashTagIcon from "../../../Icons/SubmitCargoIcons/HashTagIcon";
import ShoppingCartIcon from "../../../Icons/SubmitCargoIcons/ShoppingCartIcon";
import InputTabs, { Btn } from "./InputTabs";
import CancelBtn from "../../../component/CancelBtn";
import useCargoStore from "../../../stores/useCargoStore";

import { originPointSelect } from "../../../constants/originSelect";
import { destinationPointSelect } from "../../../constants/destinationSelect";
import { transportSelect } from "../../../constants/transportSelect";

const SubmitCargoForm = () => {
  const [form, setForm] = useState({
    title: "",
    phone: "",
    origin: "",
    destination: "",
    vehicle: "",
    tonnage: "",
    price: "",
    description: "",
  });

  const updateForm = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
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

  const addCargo = useCargoStore((state) => state.addCargo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addCargo({
      id: Date.now(),

      title: form.title,
      phone: form.phone,

      origin: form.origin,
      destination: form.destination,

      vehicle: form.vehicle,

      tonnage: isFreeTanaj ? "تناژ آزاد" : form.tonnage,

      price: isNegotiobale ? "توافقی" : form.price,

      description: form.description,
    });

    setForm({
      title: "",
      phone: "",
      origin: "",
      destination: "",
      vehicle: "",
      tonnage: "",
      price: "",
      description: "",
    });
  };

  return (
    <Box>
      <form
        action=""
        className="w-full h-full flex flex-col gap-[60px]"
        onSubmit={handleSubmit}
      >
        <div className="w-full h-full flex flex-col gap-7">
          <div className="w-full flex gap-4 justify-between">
            <SubmitInput
              icon={CardIcon}
              inputType="text"
              plcHolder="عنوان بار"
              className="w-full"
              value={form.title}
              onChange={(e) => updateForm("title", e.target.value)}
            />

            <SubmitInput
              icon={PhoneIcon}
              iconClass="left-3"
              inputType="tel"
              plcHolder="شماره تماس"
              className="w-full"
              value={form.phone}
              onChange={(e) => updateForm("phone", e.target.value)}
            />
          </div>

          <div className="flex gap-3 justify-between">
            <SelectFilter
              selectData={originPointSelect}
              icon={OriginPointIcon}
              sendSelectedOption={(selectedOption) =>
                updateForm("origin", selectedOption)
              }
              className="flex-grow"
            />

            <SelectFilter
              selectData={destinationPointSelect}
              icon={OriginPointIcon}
              sendSelectedOption={(selectedOption) =>
                updateForm("destination", selectedOption)
              }
              className="flex-grow"
            />

            <SelectFilter
              selectData={transportSelect}
              icon={TransportIcon}
              sendSelectedOption={(selectedOption) =>
                updateForm("vehicle", selectedOption)
              }
              className="flex-grow"
            />
          </div>

          <div className="w-full flex gap-4 justify-between">
            <div className="w-full flex flex-col gap-2">
              <InputTabs btnsDetails={tanajInputTabs} />

              <SubmitInput
                disabled={isFreeTanaj}
                plcHolder="0"
                inputType="number"
                className="w-full"
                icon={HashTagIcon}
                value={form.tonnage}
                onChange={(e) => updateForm("tonnage", e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <InputTabs btnsDetails={weightInputTabs} />

              <SubmitInput
                disabled={isNegotiobale}
                plcHolder="0"
                inputType="number"
                className="w-full"
                icon={ShoppingCartIcon}
                value={form.price}
                onChange={(e) => updateForm("price", e.target.value)}
              />
            </div>
          </div>

          <SubmitInput
            icon={CardIcon}
            inputType="text"
            plcHolder="توضیحات"
            className="w-full"
            value={form.description}
            onChange={(e) => updateForm("description", e.target.value)}
          />
        </div>

        <div className="self-end flex items-center gap-2">
          <CancelBtn />
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
