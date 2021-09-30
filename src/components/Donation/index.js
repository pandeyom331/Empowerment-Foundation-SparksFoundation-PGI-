import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from './DonationElements'
import logo from '../../images/logo.png';

const Donation = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'><img src={logo} alt="Empowerment Foundation" width="180px" height="110px" style={{backgroundColor:"black"}}/></Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Donation</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required placeholder="Email Address"/>
              <FormLabel htmlFor='for'>Number</FormLabel>
                <FormInput htmlFor='tel num' required placeholder="Phone Number"  />
              <FormButton href='https://rzp.io/l/empowermentfoundation' target='_blank'>Continue For Donation</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Donation
