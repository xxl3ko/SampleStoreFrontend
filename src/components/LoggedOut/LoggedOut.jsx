import css from "../UserNavBar/UserNavBar.module.css";
import {Link} from "react-router-dom";
import React from "react";

export const LoggedOut = () => {
    return (
        <div className={css.navbar}>
            <div className={css.item}>
                <Link to="/auth/login">Login</Link>
            </div>
            <div className={css.item}>
                <Link to="/auth/signup">Sign up</Link>
            </div>
        </div>
    )
}