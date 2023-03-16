import React, {useState} from 'react'
import css from './LoginForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../store/Actions/userActions";
import {useNavigate} from "react-router-dom";


export const LoginForm = () => {

    const [data, setData] = useState({username: '', password:''})
    const state = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({...data}))
    }

    if (state.isLogged) {
        return navigate('/')
    }

    return (
        <div className={css.login}>
            <h1>Login</h1>
            <form className={css.form} onSubmit={handleFormSubmit}>
                {state.login_error.map(error => {
                    return <div className={css.error}>{error}</div>
                })}
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
        </div>
    )
}