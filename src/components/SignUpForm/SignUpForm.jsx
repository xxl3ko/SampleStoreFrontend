import React, {useState} from 'react'
import css from './SignUpForm.module.css'

import {useDispatch, useSelector} from "react-redux";
import {signupUser} from "../../store/Actions/userActions";

export const SignUpForm = () => {
    const [data, setData] = useState({username: '', email: '', password: ''})
    const state = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(signupUser({...data}))
    }

    return (
        <div>
            <h1>Signup</h1>
            <form className={css.form} onSubmit={handleFormSubmit}>
                <input
                    type="text" value={data.username}
                    onChange={(e) => setData({...data, username: e.target.value})}
                    placeholder='Username'
                />

                {state.signup_error.username.map(error => {
                    return <div className={css.error} key={error}>{error}</div>
                })}

                <input
                    type="text" value={data.email}
                    onChange={(e) => setData({...data, email: e.target.value})}
                    placeholder='Email'
                />

                {state.signup_error.email.map(error => {
                    return <div className={css.error} key={error}>{error}</div>
                })}

                <input
                    type="text" value={data.password}
                    onChange={(e) => setData({...data, password: e.target.value})}
                    placeholder='Password'
                />

                {state.signup_error.password.map(error => {
                    return <div className={css.error} key={error}>{error}</div>
                })}

                <button>Signup</button>
            </form>
        </div>
    )
}