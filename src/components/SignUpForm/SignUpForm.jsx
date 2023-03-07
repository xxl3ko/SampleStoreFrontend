import React, {useState} from 'react'
import css from './SignUpForm.module.css'

import {useDispatch} from "react-redux";
import {signupUser} from "../../store/Actions/userActions";

export const SignUpForm = () => {
    const [data, setData] = useState({})
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
                <input
                    type="text" value={data.email}
                    onChange={(e) => setData({...data, email: e.target.value})}
                    placeholder='Email'
                />
                <input
                    type="text" value={data.password}
                    onChange={(e) => setData({...data, password: e.target.value})}
                    placeholder='Password'
                />
                <button>Signup</button>
            </form>
        </div>
    )
}