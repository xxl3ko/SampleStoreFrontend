import React from 'react'
import css from './LoginForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {loginUser, ONCHANGE_LOGIN_DATA} from "../../store/Actions/loginActions";

export const LoginForm = () => {
    const state = useSelector(state => state.login)
    const dispatch = useDispatch()

    const handleFormSubmit = (event) => {
        event.preventDefault();

        dispatch(loginUser({
            username: state.username,
            password: state.password,
        }))

        console.log(state)
    }

    const handleChangeData = (data) => {
        dispatch({
            type: ONCHANGE_LOGIN_DATA,
            payload: {
                username: data.username,
                password: data.password,
            }
        })
    }


    return (
        <form className={css.form} onSubmit={handleFormSubmit}>
            <label>
                Username:
                <input type="text" value={state.username}
                       onChange={(e) => handleChangeData({...state, username: e.target.value})}/>
            </label>
            <label>
                Password:
                <input type="text" value={state.password}
                       onChange={(e) => handleChangeData({...state, password: e.target.value})}/>
            </label>
            <button>LOGIN</button>
        </form>
    )
}