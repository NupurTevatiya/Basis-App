import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Form, FormButton, FormContent, FormHeading, FormInput, FormLabel, FormWrapper, Icon, } from './styles';

const Profile = () => {
    const user = useSelector((state) => state.authReducer.loggedInUser);

    console.log(user,'user in p[rofile')

   
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
                        <FormInput type="name" value={`${user?.firstName} ${user?.lastName}`} readOnly placeholder="Your Name" required />
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" value={user?.email} readOnly placeholder="Your Email" required/>
                        <FormLabel htmlFor="for">Phone Number</FormLabel>
                        <FormInput type="number" value={user?.phoneNumber} readOn placeholder="Phone Number"required/>
                        <FormButton type="submit">Logout</FormButton>
                        </Form>
                </FormContent>
            </FormWrapper>
        </Container>
    );
}
 export default Profile;