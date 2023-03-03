import React, {useState} from 'react'
import css from './LoginForm.module.css'

import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../store/Actions/userActions";


export const LoginForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    //const state = useSelector(state => state.user)
    const dispatch = useDispatch()


    const handleFormSubmit = (event) => {
        event.preventDefault();

        dispatch(loginUser({
            username,
            password,
        }))
    }

    return (
        <form className={css.form} onSubmit={handleFormSubmit}>
            <label>Username:</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            <label>Password:</label>
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <button>LOGIN</button>
        </form>
    )
}