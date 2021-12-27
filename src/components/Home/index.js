import React from 'react';
import { Container, Form, FormButton, FormContent, FormHeading, FormInput, FormLabel, FormWrapper, Icon } from '../SignUp/styles';
const Home = ()=> {
    return(
        <Container>
      <FormWrapper>
        <Icon to="/">BASIS</Icon>
        <FormContent>
            <Form>
            <FormHeading>Welcome To Basis</FormHeading>
            <h4 style={{ textAlign: "center" }}></h4>
            <FormLabel htmlFor="for"></FormLabel>
            <FormInput
              type="email"
              name="email"
              placeholder="Please Enter Your Email"
              value=""
              required
            />
            <FormButton type="submit">Continue</FormButton>
            </Form>
        </FormContent>
      </FormWrapper>
    </Container>
    );
}
export default Home;