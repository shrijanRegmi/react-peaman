import { ClipLoader } from "react-spinners";
import "./style.scss";

const Spinner = ({ loading, size, color, style }) => {
  return (
    <div
      className="spinner"
      style={{ ...style, display: loading ? "flex" : "none" }}
    >
      <ClipLoader loading={loading} size={size} color={color} />
    </div>
  );
};

Spinner.defaultProps = {
  loading: false,
  size: 30,
  color: "#0d6efd",
};

export default Spinner;
