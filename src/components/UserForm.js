import { ErrorMessage, Field } from 'formik';
import React from 'react'
import { Formik, Form } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/actions/userActions'
import { addNewUser } from '../redux/actions/createUserFormActions';
import TextError from './TextError';
import { useSelector } from 'react-redux';
import { UserContext } from '../context/GlobalState';
import { useContext } from 'react';




const validateText = (value) => {
    let error;
    if (!value)
        error = 'Required!'
    return error;

}
const validateEmail = (value) => {
    let error;
    if (!value) {
        error = 'Required!'
    }
    else if (!/\S+@\S+\.\S+/.test(value)) { error = 'Enter Valid Email!' }
    return error;

}

function UserForm() {
    const state = useSelector((state) => state).allUsers.users

    const contextData = useContext(UserContext);
    console.log(`contextData ->`, contextData);

    const location = useLocation();
    const title = location.state.title;
    let userDetails = {
        name: '',
        username: '',
        email: '',

    }
    const updateData = { ...location.state }
    console.log(`location.state.title->`, location.state.title);


    const dispatch = useDispatch()
    if (title === 'Update User') {
        userDetails = { ...updateData }

    }

    const navigate = useNavigate();
    const initialValues = userDetails
    const onSubmit = (values) => {



        if (title === 'Update User') {


            const index = state.findIndex((user) => user.id === values.id);
            const newArray = [...state]; //making a new array
            newArray[index] = values;


            dispatch(updateUser(newArray))
            navigate('/')
        } else {
            console.log(`values for new user->`, values);

            dispatch(addNewUser(values))
            navigate('/')
        }



    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validateOnMount
        >
            {({ errors, status, touched, isValid, isDirty }) => (


                <Form noValidate className='container text-white bg-light p-5 my-5 rounded' >
                    <h4 className='text-center mt-5 text-dark'>{title}</h4>
                    <div className='form-group'>
                        <label htmlFor='name' className='text-dark'>Name</label>
                        <Field type='text' id='name' name='name' validate={validateText} className="form-control" aria-describedby="emailHelp" placeholder="Enter Name"></Field>
                        <ErrorMessage name='name' component={TextError} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='username' className='text-dark'>Username</label>
                        <Field type='text' id='username' name='username' className="form-control" aria-describedby="emailHelp" placeholder="Enter Username" validate={validateText}></Field>
                        <ErrorMessage name='username' component={TextError} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email' className='text-dark'>Email</label>
                        <Field type='email' id='email' name='email' validate={validateEmail} className="form-control" aria-describedby="emailHelp" placeholder="Enter Email Address"></Field>
                        <ErrorMessage name='email' component={TextError} />
                    </div>

                    <button type='submit' className="btn btn-primary mt-5" disabled={!isValid}>{title}</button>
                    {/* <button onClick={fetchUsers}>fetch users</button> */}
                </Form>
            )}

        </Formik>

    )
}

export default UserForm;