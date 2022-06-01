import styles from "./StepName.module.css";

const StepName = ({ onNext }) => {
  return (
    <>
      <div>Name</div>
      <button onClick={onNext}>Next {"->"}</button>
    </>
  );
};

export default StepName;
