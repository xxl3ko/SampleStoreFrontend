import React from "react";
import css from './Lod.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={css.css}>
            <li>
                <NavLink to='/welcome'>WELCOME</NavLink>
            </li>
            <li>
                <NavLink to='/packs'>PACKS</NavLink>
            </li>
        </div>
    )
}
