import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../../store/actions/userActions'
import { useHistory } from "react-router-dom";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `bearer ${sessionStorage.getItem('token')}`
  };

const Dashboard = () => {
    
    const history = useHistory();

    const reducer = useSelector( state => state.userReducer )

    const dispatch = useDispatch()

    const [dados, setDados] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3333/user', {headers})
        .then((res) => {
            setDados(res.data)
        })
    }, [])

    const btnLogout = () => {
        console.log('teste')
        sessionStorage.removeItem('token')
        dispatch(userActions.logout())
        history.push("/")
    }

    useEffect(() => {
      console.log(sessionStorage.getItem('token'))
    }, [sessionStorage])

    useEffect(() => {
        console.log(reducer)
    }, [reducer])
     
    return (
        <div>
            {dados.map((item, idx) => ( 
                 <div key={idx}>
                    <div>E-mail: {item.email}</div>
                    <div>Olá, {item.config.nickname}</div>
                </div>
            ))}   
            <Button onClick={btnLogout}>Logout</Button>        
        </div>
    )
}

export default Dashboard;