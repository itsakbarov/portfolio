import classes from './Portfolio.module.scss'
import SectionHeading from '../../components/SectionHeading'
import { useEffect, useState } from 'react';
import '../../assets/styles/main.scss'
import Projects from '../../components/Projects/Projects';
import { ProjectDatas } from '../../db/datas';
const Portfolio = () => {

  const [activeFilter, setActiveFilter] = useState('')
  const [projects, setProjects] = useState(ProjectDatas)

  useEffect(() => {
      setProjects(ProjectDatas);
  }, [setProjects])

  const AllProjects = () => {
      setProjects(ProjectDatas)
      setActiveFilter("ALL")
  }

  const CodedProjects = () => {
      const coded =   ProjectDatas.filter(el => el.category === 'coded')
      setProjects(coded)
      setActiveFilter("CODED");
  }

  const DesignedProjects = () => {
        const designed = ProjectDatas.filter((el) => el.category === "designed");
        setProjects(designed);
      setActiveFilter("DESIGNED");
  }
  
  return (
    <div
      id="works"
      data-aos="flip-down"
      data-aos-duration="1500"
      className={classes.Portfolio}
    >
      <div className={classes.PortFolioHeader}>
        <SectionHeading title="PORTFOLIO" />
      </div>
      <div className={classes.ProjectsWrapper} id="w">
        <div className={`${classes.ButtonGroup} clearfix`} id="filter-list">
          <button
            data-filter="*"
            onClick={AllProjects}
            className={`filter ${classes.BtnModule} ${
              activeFilter === "ALL" ? "active-filter-btn" : " "
            }`}
          >
            All
          </button>
          <button
            data-filter=".coded"
            onClick={CodedProjects}
            className={`filter ${classes.BtnModule} ${
              activeFilter === "CODED" ? "active-filter-btn" : " "
            }`}
          >
            CODED
          </button>
          <button
            data-filter=".designed"
            onClick={DesignedProjects}
            className={` filter ${classes.BtnModule} ${
              activeFilter === "DESIGNED" ? "active-filter-btn" : " "
            }`}
          >
            DESIGNED
          </button>
        </div>
        <Projects datas={projects} />
      </div>
      <h2 className={classes.PortFolioFooter}>And many more to come!</h2>
    </div>
  );
}


export default Portfolio
