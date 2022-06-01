import styles from "./StepOTP.module.css";

const StepOTP = ({ onNext }) => {
  return (
    <>
      <div>OTP</div>
      <button onClick={onNext}>Next {"->"}</button>
    </>
  );
};

export default StepOTP;
