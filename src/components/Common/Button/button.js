import "./style.scss";

const Button = ({ value, style, className, color, onClick }) => {
  return (
    <div className={`peaman-button ${className}`}>
      <button
        style={{
          backgroundColor: color,
          ...style,
        }}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};

Button.defaultProps = {
  value: "",
  style: "",
  className: "",
  color: "var(--color-purple)",
  onClick: () => {},
};

export default Button;
