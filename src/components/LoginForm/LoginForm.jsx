import React, {useState} from 'react'
import css from './LoginForm.module.css'
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/Actions/userActions";


export const LoginForm = () => {
    const [data, setData] = useState({})
    const dispatch = useDispatch()

    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser({...data}))
    }

    return (
        <form className={css.form} onSubmit={handleFormSubmit}>
            <input
                type="text"
                value={data.username}
                onChange={(e) => setData({...data, username: e.target.value})}
                placeholder='Username'
            />
            <input
                type="text"
                value={data.password}
                onChange={(e) => setData({...data, password: e.target.value})}
                placeholder='Password'
            />
            <button>Login</button>
        </form>
    )
}