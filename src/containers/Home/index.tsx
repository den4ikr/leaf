import React, { useEffect } from "react";
import logoText from "../../assets/logoText.png";
import classes from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { motion, useAnimate } from "framer-motion";
import LeafLogo from "../../icons/LeafLogoIcon/leafLogo";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [scope, animate] = useAnimate();

  async function myAnimation() {
    await animate(scope.current, { rotate: 180 }, { delay: 0.7 });
    await animate(scope.current, { y: "-100vh" });
    await animate(scope.current, { y: 0 }, { duration: 0.3 });
    await animate(scope.current, { rotate: 0 }, { duration: 0.3 });
  }

  useEffect(() => {
    myAnimation();
  }, []);

  const handleButtonClick = () => {
    navigate("/menu");
  };

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <div className={classes.main}>
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={classes.title}
            >
              Вирощування мікрозелені
            </motion.h1>
            <div className={classes.subTextRow}>
              <motion.p
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className={classes.text}
              >
                066 805 51 15
              </motion.p>
              <motion.p
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className={classes.text}
              >
                066 805 51 15
              </motion.p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              transform: "translateX(20px)",
            }}
          >
            <LeafLogo />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className={classes.logoText}
          >
            <img
              style={{ width: "290px", height: "auto" }}
              src={logoText}
              alt="logo-text"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={classes.bottomBlock}
        >
          <button onClick={handleButtonClick} className={classes.mainButton}>
            Продукція
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
