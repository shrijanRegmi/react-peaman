import "./style.scss";
import Spinner from "../Spinner/spinner";

const Button = ({ value, style, className, color, onClick, loading }) => {
  return (
    <div
      className={`peaman-button d-flex justify-content-center ${className}`}
      style={{
        backgroundColor: color,
        ...style,
      }}
      onClick={onClick}
    >
      {loading ? <Spinner loading={true} color="white" /> : value}
    </div>
  );
};

Button.defaultProps = {
  value: "",
  style: "",
  className: "",
  color: "var(--color-purple)",
  loading: false,
  onClick: () => {},
};

export default Button;
