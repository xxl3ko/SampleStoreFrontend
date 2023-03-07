import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import css from './Auth.module.css';

import {SignUpForm} from "../../components/SignUpForm/SignUpForm";
import {LoginForm} from "../../components/LoginForm/LoginForm";
import {useSelector} from "react-redux";

export const Auth = () => {
    //const location = useLocation()
    //const state = useSelector(state => state.user)
    //const history = useHistory()

    /*useEffect(() => {
        if (state.isLogged) {
            history.push('/packs')
        }
    }, [])*/

    return (
        <div className={css.container}>
            <Routes>
                <Route path='/signup' element={<SignUpForm/>}/>
                <Route path='/login' element={<LoginForm/>}/>
            </Routes>
        </div>
    )
}