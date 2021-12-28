import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestEmailVerification, verifyEmailToken } from "../../actions/auth";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormHeading,
  FormInput,
  FormLabel,
  FormWrapper,
  Icon,
} from "../SignUp/styles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.userInfo);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user?.token) {
      dispatch(
        verifyEmailToken({
          email: user?.email,
          token: user?.token,
          verificationCode,
        })
      );
    } else dispatch(requestEmailVerification(email));
  };

  const handleVerificationCode = (e) => {
    setVerificationCode(e.target.value);
  };

  useEffect(() => {
    if (user?.token && user?.isVerified) {
      if (user?.isLogin) {
        navigate("/profile");
      } else {
        navigate("/signup");
      }
    }
  }, [user]);
  console.log(user);
  return (
    <Container>
      <FormWrapper>
        <Icon to="/">BASIS</Icon>
        <FormContent>
          <Form action="#" onSubmit={handleSubmit}>
            <FormHeading>Welcome To Basis</FormHeading>
            <h4 style={{ textAlign: "center" }}></h4>
            <FormLabel htmlFor="for"></FormLabel>
            <FormInput
              type="email"
              name="email"
              placeholder="Please Enter Your Email"
              onChange={handleChange}
              value={email}
              required
            />
            {user?.token && (
              <>
                <FormLabel htmlFor="for">Verification Code</FormLabel>
                <FormInput
                  type="number"
                  value={verificationCode}
                  onChange={handleVerificationCode}
                />
              </>
            )}{" "}
            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};
export default Home;
