import React from 'react'
import css from './Auth.module.css'
import {useDispatch} from "react-redux";
import {createUser} from "../../store/Actions/authActions";

export const Auth = () => {
    const dispatch = useDispatch()

    const test = () => {
        dispatch(createUser({
                username: 'user2',
                password: 'Pass12345',
                email: 'user2@mail.ru',
            }
        ))
    }

    return (
        <form>
            <div>
                <label htmlFor="text">username</label>
                <input type="text"/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password"/>
            </div>
            <button onClick={test}>CLICK</button>
        </form>
    )
}