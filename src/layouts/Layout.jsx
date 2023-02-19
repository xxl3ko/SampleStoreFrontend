import {Fragment} from "react";
import {Header} from "../components/Header/Header";
import css from './Layout.module.css'
import {Player} from "../components/Player/Player";

export const Layout = (props) => {
    return (
        <Fragment>
            <Header/>
            <main className={css.container}>
                {props.children}
            </main>
            <footer>
                <Player/>
            </footer>
        </Fragment>
    )
}