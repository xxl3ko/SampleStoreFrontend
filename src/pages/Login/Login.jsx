import React from 'react';
import css from './Login.module.css'
import {LoginForm} from "../../components/LoginForm/LoginForm";


export const Login = () => {
    return (
        <div className={css.container}>
            <LoginForm/>
        </div>
    )
}