import "./btn.scss";

const Button = ({ title, btnclass, Moduleclass }) => {
  return (
    <button className={`${btnclass} ${Moduleclass}  button`}>
      {title}
    </button>
  );
};

export default Button
