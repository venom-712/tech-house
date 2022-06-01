import styles from "./StepUsername.module.css";

const StepUsername = ({ onNext }) => {
  return (
    <>
      <div>Username</div>
      <button onClick={onNext}>Next {"->"}</button>
    </>
  );
};

export default StepUsername;
