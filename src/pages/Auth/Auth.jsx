import React from 'react';
import css from './Auth.module.css';
import {CreateUserForm} from "../../components/CreateUser/CreateUserForm";

export const Auth = () => {

    return (
        <div className={css.container}>
            <CreateUserForm/>
        </div>
    )
}