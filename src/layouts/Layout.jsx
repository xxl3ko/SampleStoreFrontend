import React, {Fragment} from "react";
import {Outlet} from 'react-router-dom'
import {Header} from "../components/Header/Header";
import css from './Layout.module.css'
import {Player} from "../components/Player/Player";

export const Layout = (props) => {
    return (
        <Fragment>
            <Header/>
            <main className={css.container}>
                <Outlet/>
            </main>
            <footer>
                <Player/>
            </footer>
        </Fragment>
    )
}