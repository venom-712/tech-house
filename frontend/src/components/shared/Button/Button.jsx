import styles from "./Button.module.css";
const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{label}</span>
      <img src="/images/arrow.png" alt="arrow" />
    </button>
  );
};

export default Button;
