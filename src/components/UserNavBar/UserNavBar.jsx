import React, {useEffect} from 'react';
import css from './UserNavBar.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getUser, logoutUser} from "../../store/Actions/userActions";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/auth/login">Login</Nav.Link>
                    <Nav.Link href="/auth/sign_up">Sign up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
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