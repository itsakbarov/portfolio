import classes from './SectionHeading.module.scss'
const SectionHeading = ({title}) => {
    return (
      <div className={classes.wrapper} data-aos="zoom-in-up">
        <h2 className={classes.SkillsHeading}>{title}</h2>;
      </div>
    );
}

export default SectionHeading
