import "./style.scss";
import Button from "../../components/Common/Button/button";
import Input from "../../components/Common/Input/input";
import "./style.scss";
import { ReactComponent as AuthBottom } from "../../assets/svgs/auth_bottom.svg";
import { useState } from "react";
import { ReactComponent as UploadImage } from "../../assets/svgs/upload_img.svg";

const SignUp = () => {
  const [isNextBtnPressed, setIsNextBtnPressed] = useState(false);

  return (
    <div className="auth-page">
      <div className="peaman-container text-start">
        <h2>SIGN UP</h2>
        <h4>Let us know about yourself</h4>

        {!isNextBtnPressed ? (
          <div className="mt-5">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                marginBottom: "150px",
              }}
            >
              <h5>Upload your picture</h5>
              <UploadImage />
            </div>
            <Button
              value="Next"
              className="mb-4"
              onClick={() => setIsNextBtnPressed(true)}
            />
          </div>
        ) : (
          <div>
            <div
              className="auth-container mt-5"
              style={{
                marginBottom: "70px",
              }}
            >
              <Input placeholder="Name" className="mb-5" />
              <Input placeholder="Email" className="mb-5" />
              <Input placeholder="Password" type="password" />
            </div>
            <Button value="Sign up" className="mb-4" />
            <Button value="or Sign up via Google" color="var(--color-red)" />
          </div>
        )}
      </div>
      <AuthBottom className="auth-bottom" />
    </div>
  );
};

export default SignUp;
