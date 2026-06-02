import { useState } from "react";
import CargoTitleFilter from "./CargoTitleFilter";

import SubmitCargoLink from "./SubmitCargoLink";
import CargoSelectFilter from "./CargoSelectFilter";

import OriginPointIcon from "../../Icons/CargoSelectFilters/OriginPointIcon";
import TransportIcon from "../../Icons/CargoSelectFilters/TransportIcon";

const CargoUserFilters = () => {
  const [titleFilter, setTitleFilter] = useState("");

  const [originFilter, setOriginFilter] = useState("");

  const originPointSelect = {
    lblTxt: "فیلتر مبدا",
    id: "origin",
    options: [{value: "Zahedan", optTxt: "Zahedan"}, {value: "Tehran", optTxt: "Tehran"}],
  }

  const destinationPointSelect = {
    lblTxt: "فیلتر مقصد",
    id: "destination",
    options: [{value: "Zahedan", optTxt: "Zahedan"}, {value: "Tehran", optTxt: "Tehran"}],
  }

  const [transportFilter, setTransportFilter] = useState("");

  const transportSelect = {
    lblTxt: "فیلتر ناوگان",
    id: "transport",
    options: [{value: "Zahedan", optTxt: "Zahedan"}, {value: "Tehran", optTxt: "Tehran"}],
  }

  return (
    <div className="w-full flex justify-between">
      <CargoTitleFilter
        titleFilter={(enteredTitle) => setTitleFilter(enteredTitle)}
      />

      {/* Select Filters */}
      <div className="flex gap-3">

        <CargoSelectFilter selectData={originPointSelect} icon={OriginPointIcon} sendSelectedOption={selectedOption => setOriginFilter(selectedOption)} />

        <CargoSelectFilter selectData={destinationPointSelect} icon={OriginPointIcon} sendSelectedOption={selectedOption => setTransportFilter(selectedOption)} />

        <CargoSelectFilter selectData={transportSelect} icon={TransportIcon} sendSelectedOption={selectedOption => setTransportFilter(selectedOption)} />

        <SubmitCargoLink />

      </div>
    </div>
  );
};

export default CargoUserFilters;
