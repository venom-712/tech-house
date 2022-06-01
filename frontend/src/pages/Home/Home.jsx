import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card } from "../../components";

const Home = () => {
  const navigate = useNavigate();

  const signInLinkStyles = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: 10,
  };

  const startRegistration = () => {
    navigate("/register");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card heading="Welcome to Techy House" logo="hand">
        <p className={styles.paraText}>
          We’re working hard to get Techy House ready for everyone. While we are
          wraping up the finishing touches, we are adding people gradually to
          make sure nothing breaks...
        </p>
        <div>
          <Button onClick={startRegistration} label="Get your username" />
        </div>
        <div className={styles.signInWrapper}>
          <span className={styles.hasInvite}>Hane an invite text.</span>
          <Link style={signInLinkStyles} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
