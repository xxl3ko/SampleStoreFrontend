import React, {useEffect} from 'react';
import css from './NavUserLogged.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../store/Actions/userActions";

export const NavUserLogged = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUser())
    },[])

    console.log(state.username)
    return (
        <div>{state.username}
        </div>
    )
}