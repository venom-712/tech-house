import { useState } from "react";
import {
  StepAvatar,
  StepName,
  StepOTP,
  StepPhoneEmail,
  StepUsername,
} from "../AuthSteps";

const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const onNext = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Register;
