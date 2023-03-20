import css from './PackHeader.module.css'

import {useSelector} from "react-redux";
import {PackLabel} from "../PackLabel/PackLabel";

export const PackHeader = () => {

    const state = useSelector(state => state.pack)

    return (
        <div className={css.header}>
            <img className={css.cover} src={state.pack.cover_src} alt=""/>
            <div className={css.content}>
                <div className={css.label}>
                    <PackLabel/>
                </div>
                <div className={css.title}>
                    <h1>{state.pack.title}</h1>
                </div>
            </div>
        </div>
    )
}