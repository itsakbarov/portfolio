import './Drawer.scss'
import classes from './Drawer.module.scss'
import { motion } from 'framer-motion'
import { FramerConfig, FramerItem } from '../../assets/styles/animations';
import close from '../../assets/icons/close.svg'

const Drawer = ({ drawerState, setDrawerState }) => {
  return (
    <div className={`${drawerState ? "open" : ""} drawer`}>
      <button className="closeBtn" onClick={() => setDrawerState(!drawerState)}>
        <img src={close} alt="" />
      </button>
      <div className="content">
        <motion.nav
          variants={FramerConfig}
          initial="hidden"
          animate="visible"
          className={classes.navbar}
        >
          <motion.a
            href="#about"
            variants={FramerItem}
            className={classes.SidebarLink}
          >
            About me
          </motion.a>
          <motion.a
            href="#skills"
            variants={FramerItem}
            className={classes.SidebarLink}
          >
            Skills
          </motion.a>
          <motion.a
            href="#works"
            variants={FramerItem}
            className={classes.SidebarLink}
          >
            Portfolio
          </motion.a>
          <motion.a
            href="#contact"
            variants={FramerItem}
            className={classes.SidebarLink}
          >
            CONTACT ME
          </motion.a>
        </motion.nav>
      </div>
    </div>
  );
};

export default Drawer
