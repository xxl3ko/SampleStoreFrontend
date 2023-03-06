import React from 'react'
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {UserNavBar} from "../UserNavBar/UserNavBar";

export const Header = () => {
    return (
        <div className={css.container}>
            <div>
                <NavLink to="/">Welcome</NavLink>
                <NavLink to="/packs">Packs</NavLink>
                <NavLink to="/plugins">Plugins</NavLink>
            </div>
            <div>
                <UserNavBar/>
            </div>
        </div>
    );
}