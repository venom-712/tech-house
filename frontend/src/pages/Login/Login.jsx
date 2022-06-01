import { useState } from "react";
import { StepOTP, StepPhoneEmail } from "../AuthSteps";
import styles from "./Login.module.css";

const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
};

const Login = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const onNext = () => {
    setStep((prev) => prev + 1);
  };
  return <Step onNext={onNext} />;
};

export default Login;
