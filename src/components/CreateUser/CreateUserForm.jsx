import React from 'react'
import css from './CreateUserForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {createUser, ONCHANGE_REGISTER_DATA} from "../../store/Actions/authActions";
import {createUserFormReducer} from "../../store/Reducers/createUserFormReducer";

export const CreateUserForm = () => {
    const state = useSelector(state => state.create_user)
    const dispatch = useDispatch()

    const handleChangeUsername = (data) => {
        console.log(data)
        dispatch({
                type: ONCHANGE_REGISTER_DATA,
                payload: {
                    username: data.username,
                    password: data.password,                }
            })
    }

    return (
        <form className={css.form}>
            <label>
                Username:
                <input type="text" value={state.username} onChange={(e) => handleChangeUsername({...state, username: e.target.value})}/>
            </label>
            <label>
                Password:
                <input type="text" value={state.password} onChange={(e) => handleChangeUsername({...state, password: e.target.value})}/>
            </label>
            <button>CLICK</button>
        </form>
    )
}