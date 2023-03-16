import React from 'react'
import css from "./LoggedIn.module.css";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser, logoutUser} from "../../store/Actions/userActions";


export const LoggedIn = () => {
    const state = useSelector(state => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <div className={css.navbar}>
            <div className={css.item}>
                <Link to="">{state.username}</Link>
            </div>
            <div className={css.item}>
                <div className={css.button} onClick={() => handleLogout()}>
                    Logout
                </div>
            </div>
        </div>
    )
}