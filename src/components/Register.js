import React from 'react'
import { Formik, Form} from 'formik'
import TextField  from './TextField'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { asyncAddUser } from '../actions/actions'

const Register = (props) => {
    const redirect = () => {
        props.history.push('/login')
    }
    const dispatch = useDispatch()
    const validate = Yup.object({
        username:Yup.string()
        .max(15, 'must be 15 characters or less')
        .required('Username is required'),
        email:Yup.string()
        .email('email is invalid')
        .required('email is required'),
        password:Yup.string()
        .min(6, 'password must be 6 characters')
        .required('password is required'),
        businessName:Yup.string(),
        address:Yup.string()
        
    })
    return (
        <div className='mx-5'>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    businessName: '',
                    address: ''

                }}
                validationSchema = {validate}
                onSubmit={ values => {
                    dispatch(asyncAddUser(values, redirect))
                }}
            >
                { formik => (
                    <div className='mx-5'>
                        <h1>Register Component</h1>
                        <Form>
                            <TextField label='User Name' name='username' type='text'/>
                            <TextField label='Email' name='email' type='email'/>
                            <TextField label='Password' name='password' type='password'/>
                            <TextField label='Business Name' name='businessName' type='text'/>
                            <TextField label='Address For Business' name='address' type='text'/>
                            <button className='btn btn-dark mt-3' type='submit'>Register</button>
                            <button className='btn btn-danger mt-3 mx-3' type='reset'>Reset</button>
                        </Form>
                    </div>
                )
                    
                }
            </Formik>
        </div>
    ) 
}

export default Register