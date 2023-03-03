import React, {useEffect} from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import css from './Auth.module.css';

import {SignUpForm} from "../../components/SignUpForm/SignUpForm";
import {LoginForm} from "../../components/LoginForm/LoginForm";
import {useSelector} from "react-redux";

export const Auth = () => {

    const state = useSelector(state => state.user)
    const history = useHistory()

    useEffect(() => {
        if (state.isLogged) {
            history.push('/packs')
        }
    }, [])

    return (
        <div className={css.container}>
            <Switch>
                <Route path='/auth/signup'>
                    <SignUpForm/>
                </Route>
                <Route path='/auth/login'>
                    <LoginForm/>
                </Route>
            </Switch>
        </div>
    )
}