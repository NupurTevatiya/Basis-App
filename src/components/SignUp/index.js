import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/auth";
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
  Text,
} from "./styles";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const user = useSelector((state) => state.authReducer.userInfo);
  const error = useSelector((state) => state.authReducer)
  const loginSuccess = useSelector((state) => state.authReducer.loginSuccess);
  const [name, setName] = useState("");
  const [referCode, setReferCode] = useState(null);
  const dispatch = useDispatch();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleReferralCode = (e) => {
    setReferCode(e.target.value);
  };

  const navigate = useNavigate();

  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signup({
        email: user?.email,
        name,
        agree: true,
        token: user?.token,
        referCode,
      })
    );
  };

  useEffect(() => {
    if (user?.token && loginSuccess) {
      navigate("/profile");
    }
  }, [loginSuccess]);

  return (
    <Container>
      <FormWrapper>
        <Icon to="/">BASIS</Icon>
        <FormContent>
          <Form action="#" onSubmit={handleSubmit}>
            <FormHeading>Create A New Account</FormHeading>

            <FormLabel htmlFor="for">Name</FormLabel>
            <FormInput
              value={name}
              onChange={handleNameChange}
              type="name"
              required
            />
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" value={user?.email} readOnly required />
            <FormLabel htmlFor="for" >ReferredCodeKey</FormLabel>
            <Text>{error?.message}</Text>
            <FormInput type="text" onChange={handleReferralCode} value={referCode} placeholder="optional" />
            

            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};
export default SignUp;
