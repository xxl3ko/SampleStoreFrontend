import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={s.css}>
            <li>
                <NavLink to='/welcome'>WELCOME</NavLink>
            </li>
            <li>
                <NavLink to='/packs'>PACKS</NavLink>
            </li>
        </div>
    )
}
