import React from 'react'
import css from './SignUpForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {createUser, ONCHANGE_REGISTER_DATA} from "../../store/Actions/userActions";

export const SignUpForm = () => {
    const state = useSelector(state => state.create_user)
    const dispatch = useDispatch()

    const handleFormSubmit = (event) => {
        event.preventDefault();

        dispatch(createUser({
            username: state.username,
            password: state.password,
            email: 'user2@mail.ru'
        }))
    }

    const handleChangeUsername = (data) => {
        dispatch({
            type: ONCHANGE_REGISTER_DATA,
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
                       onChange={(e) => handleChangeUsername({...state, username: e.target.value})}/>
            </label>
            <label>
                Password:
                <input type="text" value={state.password}
                       onChange={(e) => handleChangeUsername({...state, password: e.target.value})}/>
            </label>
            <button>CLICK</button>
        </form>
    )
}