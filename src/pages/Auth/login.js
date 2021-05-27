import Button from "../../components/Common/Button/button";
import Input from "../../components/Common/Input/input";
import "./style.scss";
import { ReactComponent as AuthBottom } from "../../assets/svgs/auth_bottom.svg";
import { Link, useHistory } from "react-router-dom";
import loginUserAction from "../../store/actions/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.usersReducer.user);
  const history = useHistory();
  const errorMessage = useSelector((state) => state.errorReducer.message);

  useEffect(() => {
    if (user.uid) history.replace("/chats");
  }, [user]);

  useEffect(() => {
    if (errorMessage !== "") setIsLoading(false);
  }, [errorMessage]);

  const dispatch = useDispatch();

  const handleOnChange = (data) => {
    const newFormState = { ...formState, [data.name]: data.value };
    setFormState(newFormState);
  };

  const handleLogin = () => {
    if (formState.email !== "" && formState.password !== "") {
      setIsLoading(true);
      dispatch(loginUserAction(formState));
    }
  };

  return (
    <div className="auth-page">
      <div className="peaman-container text-start">
        <h2>LOGIN</h2>

        <div className="auth-container mt-5 mb-4">
          <Input
            placeholder="Email"
            className="mb-5"
            name="email"
            required={true}
            onChange={handleOnChange}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleOnChange}
          />
        </div>

        <div className="d-flex justify-content-end mb-4">Forget password ?</div>

        <Button value="Log in" onClick={handleLogin} loading={isLoading} />

        <div className="text-center my-4">
          New user ?{" "}
          <Link
            to="/signup"
            style={{
              fontWeight: "bold",
              color: "var(--color-purple)",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Sign up
          </Link>
        </div>

        <Button value="or Log in via Google" color="var(--color-red)" />
      </div>
      <AuthBottom className="auth-bottom" />
    </div>
  );
};

export default Login;
