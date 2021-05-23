import Button from "../../components/Common/Button/button";
import Input from "../../components/Common/Input/input";
import "./style.scss";
import { ReactComponent as AuthBottom } from "../../assets/svgs/auth_bottom.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="peaman-container text-start">
        <h2>LOGIN</h2>

        <div className="auth-container mt-5 mb-4">
          <Input placeholder="Email" className="mb-5" />
          <Input placeholder="Password" type="password" />
        </div>

        <div className="d-flex justify-content-end mb-4">Forget password ?</div>

        <Button value="Log in" />

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
