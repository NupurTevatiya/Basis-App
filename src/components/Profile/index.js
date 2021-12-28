import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { Container, Form, FormButton, FormContent, FormHeading, FormInput, FormLabel, FormWrapper, Icon, } from './styles';

const Profile = () => {
    const user = useSelector((state) => state.authReducer.userInfo);

    console.log(user,'user in profile')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async (e) => {
        e.preventDefault()
        await dispatch(logout({id: user?._id, token: user?.token}))
        await navigate('/')
    }

   
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
                        <FormButton type="submit" onClick={handleLogout}>Logout</FormButton>
                        </Form>
                </FormContent>
            </FormWrapper>
        </Container>
    );
}
 export default Profile;