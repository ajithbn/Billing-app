import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import TextField from './TextField'
import { asyncLoginUser } from '../actions/actions'

const Login = (props) => {
    const dispatch = useDispatch()
    const redirect = () => {
        props.history.push('/dashboard')
    }
    const validate = Yup.object({
        email:Yup.string()
        .email('email is invalid')
        .required('email is required'),
        password:Yup.string()
        .min(6, 'password must be 6 characters')
        .required('password is required')
    })
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',

                }}
                validationSchema = {validate}
                onSubmit={ values => {
                    //props.history.push('/dashboard')
                    dispatch(asyncLoginUser(values, redirect))
                }}
            >
                { formik => (
                    <div className='mx-5 my-5'>
                        <h1>User Login</h1>
                        <Form>
                            <TextField label='Email' name='email' type='email'/>
                            <TextField label='Password' name='password' type='password'/>
                            <button className='btn btn-dark mt-3' type='submit'>Login</button>
                            <button className='btn btn-danger mt-3 mx-3' type='reset'>Cancel</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    ) 
}

export default Login