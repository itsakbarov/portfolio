import classes from "./About.module.scss"

const About = () => {
    return (
      <div
        className={classes.About}
        data-aos="flip-down"
        data-aos-anchor-placement="bottom-bottom"
        id="about"
      >
        <div className={classes.container}>
          <h2
            className={classes.AboutHeading}
            data-aos-duration="1500"
            data-aos="fade-down-right"
          >
            About me.
          </h2>
          <h3
            data-aos="fade-down-right"
            data-aos-duration="1500"
            className={classes.AboutText}
          >
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Morbi commodo, eros in
            dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
            tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
            Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
            varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
            tempor, accumsan nec eros.{" "}
          </h3>
            <a a download href = "https://www.dropbox.com/s/jlx81pktppg9gji/resume.pdf?dl=0" >
          <button className={classes.AboutButton}>
            Download Resume
          </button>
            </a>
        </div>
      </div>
    );
}

export default About
