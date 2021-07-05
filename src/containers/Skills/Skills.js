import { LearingNow, OItherSkills, UsingNow } from "../../db/datas";
import classes from "./Skills.module.scss"
import SectionHeading from '../../components/SectionHeading'
import Devider from "../../components/Devider";


const Skills = () => {
  return (
    <div
      className={classes.Skills}
      id="skills"
      data-aos="flip-down"
      data-aos-duration="1500"
    >
      <div className={classes.container}>
        <SectionHeading title="Skills" />
        <Devider />
        <h2 className={classes.UsingNowHeading} data-aos="flip-down">
          Using Now:{" "}
        </h2>
        <div
          className={classes.UsingNowSection}
        >
          {UsingNow.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in-down"
              className={classes.UsingNowHolder}
            >
              {item.logo}
              <p className={classes.SkillType}>{item.title}</p>
            </div>
          ))}
        </div>
        <h2 className={classes.UsingNowHeading}>Learning Now: </h2>
        <div className={classes.UsingNowSection}>
          {LearingNow.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in-down"
              className={classes.UsingNowHolder}
            >
              {item.logo}
              <p className={classes.SkillType}>{item.title}</p>
            </div>
          ))}
        </div>
        <h2 className={classes.UsingNowHeading}>Other Skills: </h2>
        <div className={classes.UsingNowSection}>
          {OItherSkills.map((item, index) => (
            <div
              data-aos="zoom-in-down"
              key={index}
              className={classes.UsingNowHolder}
            >
              {item.logo}
              <p className={classes.SkillType}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills
