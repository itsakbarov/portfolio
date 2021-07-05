import classes from "./Contact.module.scss"
import SectionHeading from '../../components/SectionHeading'
import Devider from "../../components/Devider"
import Form from "../../components/Form/Form"

const Contact = () => {
    return (
      <div
      id="contact"
        className={classes.Contact}
        data-aos="flip-down"
        data-aos-duration="1500"
      >
        <SectionHeading title="CONTACT" />
        <Devider />
        <p className={classes.subHeading}  data-aos="zoom-in-up">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
        <Form/>
      </div>
    );
}

export default Contact
