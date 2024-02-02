
import { lazy, useCallback, useState } from "react";
import Page from "../../../componets/page";
import StepTwo from "./components/StepTwo";
const StepOne = lazy(() => import("./components/StepOne"));
const SignUp = () => {
  const [step, setStep] = useState<number>(0);

  const handleSteps = useCallback((key: 'next' | 'back') => {
    if (key === 'next') {
      setStep((pre: number) => pre + 1);
    }
    if (key === 'back') {
      setStep((pre: number) => pre - 1);
    }
  }, [step]);

  const registerSteps = [<StepOne callBack={handleSteps} />, <StepTwo callBack={handleSteps} />]

  return (
    <Page>
      {registerSteps[step]}
    </Page>
  );
};

export default SignUp;
