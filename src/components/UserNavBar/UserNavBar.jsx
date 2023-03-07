import React from 'react';
import {useSelector} from "react-redux";
import {LoggedIn} from "../LoggedIn/LoggedIn";
import {LoggedOut} from "../LoggedOut/LoggedOut";

export const UserNavBar = () => {

    const state = useSelector(state => state.user)

    if (!state.isLogged) {
        return (
            <LoggedOut/>
        )
    } else {
        return (
            <LoggedIn/>

        )
    }
}