import "./style.scss";

const Input = ({ placeholder, type, style, className }) => {
  return (
    <div className={`peaman-input ${className}`} style={style}>
      <div className="input-container">
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
};

export default Input;
