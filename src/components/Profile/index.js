import React from 'react';
import { Container, Form, FormButton, FormContent, FormHeading, FormInput, FormLabel, FormWrapper, Icon, } from './styles';

const Profile = () => {
   
    return (
        <Container>
            <FormWrapper>
                <Icon to= "/">BASIS</Icon>
                <FormContent>
                    <Form>
                    <FormHeading>
                        Welcome to your profile
                        </FormHeading>
                        <FormLabel htmlFor="for">Name</FormLabel>
                        <FormInput type="name" value="" readOnly placeholder="Your Name" required />
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" value="" readOnly placeholder="Your Email" required/>
                        <FormLabel htmlFor="for">Phone Number</FormLabel>
                        <FormInput type="number" value="" readOn placeholder="Phone Number"required/>
                        <FormButton type="submit">Logout</FormButton>
                        </Form>
                </FormContent>
            </FormWrapper>
        </Container>
    );
}
 export default Profile;