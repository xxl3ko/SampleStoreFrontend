import React from 'react'
import css from './Header.module.css'
import {UserNavBar} from "../UserNavBar/UserNavBar";
import {GlobalNavBar} from "../GlobalNavBar/GlobalNavBar";

export const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logo}>
                boq
            </div>
                <GlobalNavBar/>
                <UserNavBar/>
        </div>
    );
}