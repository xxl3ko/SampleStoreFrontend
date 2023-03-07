import React from 'react';
import {Route, Routes} from "react-router-dom";
import css from './Auth.module.css';

import {SignUpForm} from "../../components/SignUpForm/SignUpForm";
import {LoginForm} from "../../components/LoginForm/LoginForm";

export const Auth = () => {

    return (
        <div className={css.container}>
            <Routes>
                <Route path='/signup' element={<SignUpForm/>}/>
                <Route path='/login' element={<LoginForm/>}/>
            </Routes>
        </div>
    )
}