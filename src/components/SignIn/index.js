import React, {useState, useEffect} from 'react';
import { Container, Form, FormButton, FormContent, FormHeading, FormInput, FormLabel, FormWrapper, Icon, Text } from './styles';

const SignIn = () => {
   
    return (
        <Container>
            <FormWrapper>
                <Icon to= "/">getBasis</Icon>
                <FormContent>
                    <Form>
                    <FormHeading>
                        Verify Your Account
                        </FormHeading>
                        
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" value="" readOnly required />
                        <FormLabel htmlFor="for">Verification Code</FormLabel>
                        <FormInput type="number" value="" required/>
                        <FormButton type="submit">Continue</FormButton>
                        </Form>
                </FormContent>
            </FormWrapper>
        </Container>
    );
}
 export default SignIn;
