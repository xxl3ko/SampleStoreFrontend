import React from 'react'
import css from './CreateUserForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../store/Actions/authActions";

export const CreateUserForm = () => {
    const state = useSelector(state => state.create_user)
    const dispatch = useDispatch()

    const test = () => {
        dispatch(createUser({
                username: state.username,
                password: state.password,
                email: 'user3@mail.ru',
            }
        ))
    }

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <form className={css.form}>
            <label htmlFor="text">username</label>
            <input type="text" value={state.username} onChange={handleChange}/>
            <label htmlFor="password">password</label>
            <input type="text" value={state.password}/>
            <button onClick={test}>CLICK</button>
        </form>
    )
}