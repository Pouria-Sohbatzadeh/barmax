import Box from "../../component/Box";
import SubmitMessageForm from "./SubmitMessageForm";
import TargetDrivers from "./DriverList/TargetDrivers";

const SendMessage = () => {
  return (
    <Box className="!flex-row gap-4 p-[35px] !pr-[16px] !pl-[16px] !border-transparent">
      <SubmitMessageForm />

      <TargetDrivers />
    </Box>
  );
};

export default SendMessage;
