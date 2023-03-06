import React, {useEffect} from 'react';
import css from './UserNavBar.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getUser, logoutUser} from "../../store/Actions/userActions";
import {Link} from "react-router-dom";

export const UserNavBar = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const handleLogout = () => {
        dispatch(logoutUser())
    }

    if (!state.isLogged) {
        return (
            <div>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/signup">Sign up</Link>
            </div>
            /* <div className={css.container}>
                 <div className={css.test}>
                     <Link to='/auth/login'>Login</Link>
                 </div>
                 <div className={css.test}>
                     <Link to='/auth/sign_up'>Sign up</Link>
                 </div>
             </div>*/
        )
    } else {
        return (
            <div className={css.container}>
                <div>{state.username}</div>
                <button onClick={handleLogout}>LOGOUT</button>
            </div>
        )
    }
}