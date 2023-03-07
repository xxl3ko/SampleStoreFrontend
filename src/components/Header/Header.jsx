import React from 'react'
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {UserNavBar} from "../UserNavBar/UserNavBar";
import {GlobalNavBar} from "../GlobalNavBar/GlobalNavBar";

export const Header = () => {
    return (
        <div className={css.container}>
            <div>
                LOGO
            </div>
                <GlobalNavBar/>
                <UserNavBar/>
        </div>
    );
}