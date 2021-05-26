import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../../store/actions/userActions'

const Login = (props) => {

    const reducer = useSelector( state => state.userReducer )

    const dispatch = useDispatch()

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
    })

    const btnSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3333/login', {
            email: formik.values.email,
            password: formik.values.password
        })
        .then((res) => {
            console.log(res.data)
            sessionStorage.setItem('email', formik.values.email)
            sessionStorage.setItem('token', res.data.token)
            //disparar action login para add dados na variavel global (redux)
            dispatch(userActions.login(formik.values.email))
            history.push("/dashboard");
        })

    }

    useEffect(() => {
        console.log(reducer)
    }, [reducer])

    return (
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                    placeholder="Email"
                    id="email"
                    type="email"
                    {...formik.getFieldProps('email')}
                />
            </FormGroup>

            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                    placeholder="Senha"
                    id="password"
                    type="password"
                    {...formik.getFieldProps('password')} />
            </FormGroup>
            <Button onClick={btnSubmit}>Submit</Button>
        </Form>
    );
}

export default Login;