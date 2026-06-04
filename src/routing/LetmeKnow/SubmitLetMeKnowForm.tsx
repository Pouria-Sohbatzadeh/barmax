import { useState } from "react";

import Box from "../../component/Box";
import Button from "../../component/Button";
import TransportIcon from "../../Icons/CargoSelectFilters/TransportIcon";

import { originPointSelect } from "../../constants/originSelect";
import { destinationPointSelect } from "../../constants/destinationSelect";
import { transportSelect } from "../../constants/transportSelect";
import PhoneIcon from "../../Icons/SubmitCargoIcons/PhoneIcon";
import SelectFilter from "../../component/SelectFilter";
import OriginPointIcon from "../../Icons/CargoSelectFilters/OriginPointIcon";
import SubmitInput from "../../component/SubmitInput";
import useLetMeKnowStore from "../../stores/useLetMeKnowsStore";
import CreditIcon from "../../Icons/CreditIcon";
import WeightIcon from "../../Icons/WeightIcon";

const SubmitLetMeKnowForm = () => {
  const [form, setForm] = useState({
    phone: "",
    origin: "",
    destination: "",
    vehicle: "",
    startingTonnage: "",
    endingTonnage: "",
    startingPrice: "",
    endingPrice: "",
  });

  const updateForm = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const addLetMeKnow = useLetMeKnowStore((state) => state.addLetMeKnow);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addLetMeKnow({
      id: Date.now(),

      title: "باخبر شو", // or another title if desired

      phone: form.phone,

      origin: form.origin,
      destination: form.destination,

      vehicle: form.vehicle,

      startingTonnage: form.startingTonnage,
      endingTonnage: form.endingTonnage,

      startingPrice: form.startingPrice,
      endingPrice: form.endingPrice,

      submitTime: new Date().toLocaleString("fa-IR"),
    });

    setForm({
      phone: "",
      origin: "",
      destination: "",
      vehicle: "",
      startingTonnage: "",
      endingTonnage: "",
      startingPrice: "",
      endingPrice: "",
    });
  };

  return (
    <Box>
      <form
        action=""
        className="w-full h-full flex flex-col gap-[60px]"
        onSubmit={handleSubmit}
      >
        {/* Forms */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-3 justify-between">
            <SubmitInput
              icon={PhoneIcon}
              iconClass="left-3"
              inputType="tel"
              plcHolder="شماره تماس"
              className="w-full"
              value={form.phone}
              onChange={(e) => updateForm("phone", e.target.value)}
            />

            <SelectFilter
              selectData={transportSelect}
              icon={TransportIcon}
              sendSelectedOption={(selectedOption) =>
                updateForm("vehicle", selectedOption)
              }
              className="w-full"
            />
          </div>

          <div className="flex gap-3 justify-between">
            <SelectFilter
              selectData={originPointSelect}
              icon={OriginPointIcon}
              sendSelectedOption={(selectedOption) =>
                updateForm("origin", selectedOption)
              }
              className="w-full"
            />

            <SelectFilter
              selectData={destinationPointSelect}
              icon={OriginPointIcon}
              sendSelectedOption={(selectedOption) =>
                updateForm("destination", selectedOption)
              }
              className="w-full"
            />
          </div>
          <div className="flex gap-3 justify-between">
            <SubmitInput
              icon={WeightIcon}
              
              inputType="number"
              plcHolder="وزن از (تن)"
              className="w-full"
              value={form.startingTonnage}
              onChange={(e) => updateForm("startingTonnage", e.target.value)}
            />

            <SubmitInput
              icon={WeightIcon}
              
              inputType="number"
              plcHolder="وزن تا (تن)"
              className="w-full"
              value={form.endingTonnage}
              onChange={(e) => updateForm("endingTonnage", e.target.value)}
            />
          </div>
          <div className="flex gap-3 justify-between">
            <SubmitInput
              icon={CreditIcon}
              
              inputType="number"
              plcHolder="هزینه از (تومان)"
              className="w-full"
              value={form.startingPrice}
              onChange={(e) => updateForm("startingPrice", e.target.value)}
            />

            <SubmitInput
              icon={CreditIcon}
              
              inputType="number"
              plcHolder="هزینه تا (تومان)"
              className="w-full"
              value={form.endingPrice}
              onChange={(e) => updateForm("endingPrice", e.target.value)}
            />
          </div>
        </div>

        <Button type="submit" className="self-end gap-3 pt-[14px] pb-[14px]">
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

          <span>ثبت</span>
        </Button>
      </form>
    </Box>
  );
};

export default SubmitLetMeKnowForm;
