import React, { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { requestUsersSuccess, requestUsersFailed } from '../redux/actions/userActions'

import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaceholderStack from './PlaceholderStack';
import Button from 'react-bootstrap/Button';



function HomePage() {

    const state = useSelector((state) => state).allUsers
    const navigate = useNavigate();
    const deletUserFunc = ({ id, name }) => {
        const areYouSure = window.confirm(`Do you want to Delete the record of ${name} with id: ${id}`);
        const indexOfDeletedElement = state.users.indexOf(state.users.filter((user) => user.id === id)[0])
        if (areYouSure) {
            state.users.splice(indexOfDeletedElement, 1)
            navigate('/');
        }
    };
    const theadData = ['Id', 'Name', 'Email', 'Edit'];

    const allUsers = state.users;
    const dispatch = useDispatch()


    useEffect(() => {
        if (allUsers.length === 0) {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    dispatch(requestUsersSuccess(response.data))

                })
                .catch((error) => {
                    dispatch(requestUsersFailed(`Something Seriously Went wrong: ${error.message}`))
                })
        }
    }, [])

    if (state.isLoading) {
        return <PlaceholderStack />
    }

    if (state.error) {
        return <h4>{state.error}</h4>
    } else {
        return <>
            <Table bordered className='container my-5' striped hover variant='light'>
                <thead className='table-dark'>
                    <tr >
                        {theadData.map((element, index) => {
                            return <th key={index}>{element}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((row, index) => {
                        return <tr key={index}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>
                                <div className='d-flex'>
                                    <Button onClick={() => { deletUserFunc(row) }} variant="danger" className='m-2'><i className="bi bi-trash3-fill" style={{ "fontSize": "1.3rem", "color": "", }}></i></Button>
                                    <Button onClick={() => { navigate('update-user-form', { state: { ...row, title: "Update User" } }) }} variant="success" className='m-2'><i className="bi bi-pencil-square" style={{ "fontSize": "1.3rem", "color": "", }}></i></Button>
                                </div>
                            </td>
                        </tr>;
                    })}
                </tbody>
            </Table>
            <div className="col-md-12 text-center">

                <Button onClick={() => { navigate('create-user', { state: { title: "Create New User" } }) }} variant="primary" className='ms-auto my-4'>Create New User</Button>
            </div>
        </>
    }

}
export default HomePage;