import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestEmailVerification } from "../../actions/auth";
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.userInfo);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestEmailVerification(email));
  };

  useEffect(() => {
    if (user.isLogin) {
      navigate("/signin");
    } else {
      navigate("/signup");
    }
  }, [user]);

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
            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};
export default Home;
