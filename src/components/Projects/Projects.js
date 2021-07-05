import classes from "./Projects.module.scss";
import { LinkIcon } from "../../assets/icons/base_icons";

const Projects = ({datas}) => {
  return (
    <div className={classes.container}>
      <ul className={`${classes.Projects} project-wrapper`} id="portfolio">
        {datas.map((item, index) => (
          <li
            className={`${classes.ProjectItem} ${datas.category} project `}
            key={index}
            data-aos="zoom-out-down"
          >
            <a
              key={item.title}
              target="_blank"
              rel="noreferrer"
              href={`${item.url}`}
            >
              <img src={item.backdrop_path} alt={item.title} />
            </a>
            <div className={classes.hoverBlock}>
              <a target="_blank" rel="noreferrer" href={item.repo}>
                Source code <LinkIcon />{" "}
              </a>
              <a target="_blank" rel="noreferrer" href={item.url}>
                view Demo
                <LinkIcon />{" "}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
