import { useState } from 'react';
import classes from './Form.module.scss'
import { db } from '../../firebase'

const Form = () => {
  const [data, setData] = useState({})
  const [loader, setLoader] = useState(false)
  const handleChange = (event) => {
    setData({ ...data, [event.name]: event.value })
  }

  const handleSubit = (e) => {
    e.preventDefault()
    setLoader(true)
    db.collection("user")
      .add({
        fullname: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        message: data.message,
      })
      .then(() => {
        alert("message has been submitted");
        setLoader(false);
      })
      .catch((err) => alert(err.message));
      setData({})
  }
  return (
    <form className={classes.Form}>
      <label className={classes.Label} htmlFor="userName" data-aos="zoom-in-up">
        <input
          type="text"
          onChange={(e) => handleChange(e.target)}
          name="fullName"
          id="userName"
        />
        <p>Full Name</p>
      </label>
      <label className={classes.Label} htmlFor="mail" data-aos="zoom-in-up">
        <input
          type="text"
          id="mail"
          onChange={(e) => handleChange(e.target)}
          name="email"
        />
        <p>Email</p>
      </label>
      <label className={classes.Label} htmlFor="number" data-aos="zoom-in-up">
        <input
          type="text"
          id="number"
          onChange={(e) => handleChange(e.target)}
          name="phoneNumber"
        />
        <p>Phone Number</p>
      </label>
      <label className={classes.Label} htmlFor="text" data-aos="zoom-in-up">
        <textarea
          type="text"
          id="text"
          onChange={(e) => handleChange(e.target)}
          name="message"
        />
        <p>Your Message*</p>
      </label>
      <div className={classes.BtnWrapper} data-aos="zoom-in-up">
        <button
          type="submit"
          className={classes.SubmitButton}
          onClick={handleSubit}
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default Form
