import "./style.scss";

const Input = ({ placeholder, type, style, className, onChange, name }) => {
  const handleOnChange = (e) => {
    onChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <div className={`peaman-input ${className}`} style={style}>
      <div className="input-container">
        <input
          type={type}
          placeholder={placeholder}
          onChange={handleOnChange}
          name={name}
        />
      </div>
    </div>
  );
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
  name: "",
  onChange: () => {},
};

export default Input;
