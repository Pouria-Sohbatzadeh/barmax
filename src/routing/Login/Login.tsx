import ModeSwitchBTN from "../../component/Header/ModeSwitchBTN";
import useLightStore from "../../stores/useLightStore";

import MoonIcon from "../../Icons/HeaderIcons/MoonIcon";
import SunIcon from "../../Icons/HeaderIcons/SunIcon";
import LogInForm from "./LogInForm";

interface formData {
  phone: string;
  confirmCode: number;
}

const Login = () => {
  const { changeMode } = useLightStore();


  return (
    <>
      <div className="absolute left-12 top-8">
        <ModeSwitchBTN
          iconMoon={MoonIcon}
          iconSun={SunIcon}
          handleMode={changeMode}
        />
      </div>

      <LogInForm />

    </>
  );
};

export default Login;
