import { Link } from "react-router-dom";
import classes from "./Appbar.module.scss";
import { motion } from "framer-motion";
import { Base, Child } from "../../assets/styles/animations";
import { SiteLogo } from "../../assets/icons/base_icons";
import { useEffect, useRef, useState } from "react";
import Drawer from "../Drawer";

const Appbar = () => {
  const [drawerState, setDrawerState ] = useState(false)
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 1);
    } else {
      setSticky(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div className={`${classes.Appbar} ${isSticky ? "sticky" : ""}`} ref={ref}>
      <div className={classes.container}>
        <motion.nav
          variants={Base}
          initial="hidden"
          animate="visible"
          className={classes.navbar}
        >
          <motion.a
            href="#about"
            variants={Child}
            className={classes.AppBarLink}
          >
            About me
          </motion.a>
          <motion.a
            href="#skills"
            variants={Child}
            className={classes.AppBarLink}
          >
            Skills
          </motion.a>
          <motion.a
            href="#works"
            variants={Child}
            className={classes.AppBarLink}
          >
            Portfolio
          </motion.a>
          <motion.a
            href="#contact"
            variants={Child}
            className={classes.AppBarBtn}
          >
            CONTACT ME
          </motion.a>
        </motion.nav>
        <button
          onClick={() => setDrawerState(!drawerState)}
          className={classes.drawerBtn}
        >
          <div id="drawer" className={drawerState ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className={classes.logo}>
          <Link to="/">
            <SiteLogo />
          </Link>
        </div>
      </div>
      <Drawer drawerState={drawerState} setDrawerState={setDrawerState} />
    </div>
  );
};

export default Appbar;
