import React from 'react';
import { Container, Form, FormButton, FormContent, FormHeading, FormInput, FormLabel, FormWrapper, Icon, } from './styles';
import { RadioContainer, RadioInput } from './styles';

const SignUp = ()=> {
    return(
        <Container>
      <FormWrapper>
        <Icon to="/">BASIS</Icon>
        <FormContent>
          <Form>
            <FormHeading>Create A New Account</FormHeading>

            <FormLabel htmlFor="for">Name</FormLabel>
            <FormInput value="" type="name" required />
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" value="" readOnly required />
            <FormLabel htmlFor="for">ReferredCodeKey</FormLabel>

            <FormInput
              type="text"
              value=""
              placeholder="optional"
            />
            <span style={{ color: "red" }}></span>
            <RadioContainer>
              <RadioInput required value="" type="checkbox" />
              <FormLabel style={{ margin: "3px" }} htmlFor="for">
                Agree To Privacy Policy
              </FormLabel>
            </RadioContainer>
            <FormButton type="submit">Continue</FormButton>
            </Form>
        </FormContent>
      </FormWrapper>
    </Container>
    );
}
export default SignUp;