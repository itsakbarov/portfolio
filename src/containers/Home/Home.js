import { motion } from "framer-motion";
import { HomeLinks } from "../../db/datas";
import classes from "./Home.module.scss";
import { FramerConfig, FramerItem } from '../../assets/styles/animations'
import Background from '../../assets/images/photo_2021-05-31_13-16-36-removebg-preview_auto_x2 (1).png'

const Home = () => {
  return (
    <div className={classes.home} id="home">
      <div className={classes.container}>
        <div className={classes.left}>
          <motion.div className={`${classes.row} ${classes.heroSubName}`}>
            <motion.h3
              initial={{ x: -300 }}
              transition={{ duration: 2 }}
              animate={{ x: 0 }}
            >
              Hi, I am
            </motion.h3>
          </motion.div>
          <div className={`${classes.row} ${classes.heroName}`}>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 3 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Sardor
            </motion.h1>
            <motion.h1
              style={{ marginLeft: "10px" }}
              initial={{ y: 200, opacity: 0 }}
              transition={{ duration: 4 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {" "}
              Akbarov
            </motion.h1>
          </div>
          <div className={`${classes.row} ${classes.heroSubText}`}>
            <motion.h4
              initial={{ x: 200, opacity: 0 }}
              transition={{ duration: 4 }}
              animate={{ x: 0, opacity: 1 }}
            >
              Frontend developer.
            </motion.h4>
          </div>
        </div>
        <motion.div
          className={classes.HomeLinksWraper}
          variants={FramerConfig}
          initial="hidden"
          animate="visible"
        >
          {HomeLinks.map((item, index) => (
            <motion.a
              key={index}
              target="_blank"
              rel="noreferrer"
              variants={FramerItem}
              href={item.path}
              className={classes.HeroLink}
            >
              {item.logo}
            </motion.a>
          ))}
        </motion.div>
        {/* <img src={Background} className={classes.HeroImage} alt="" /> */}
      </div>
    </div>
  );
};

export default Home;
