import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwError } from "../../../store/actions/Error";
import "./style.scss";

const ErrorComponent = () => {
  const errorMessage = useSelector((state) => state.errorReducer.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage !== "") {
      setTimeout(() => {
        dispatch(throwError(""));
      }, 6000);
    }
  }, [errorMessage]);

  return (
    <div
      className="peaman-error"
      style={{
        display: errorMessage === "" ? "none" : "block",
      }}
    >
      <div className="error-container">
        <p>An error occured :</p>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
