import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ children, heading, logo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        <img src={`/images/${logo}.png`} alt="logo" />
        <h1 className={styles.heading}>{heading}</h1>
      </div>
      {children}
    </div>
  );
};

export default Card;
