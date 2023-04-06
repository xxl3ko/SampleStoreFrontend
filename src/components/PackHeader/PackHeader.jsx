import css from './PackHeader.module.css'

import {useSelector} from "react-redux";

export const PackHeader = () => {

    const state = useSelector(state => state.pack)

    return (
        <div className={css.header}>
            <img className={css.cover} src={state.cover} alt=""/>
            <div className={css.content}>
                <div className={css.label}>
                    <h3>{state.label.name}</h3>
                </div>
                <div className={css.title}>
                    <h1>{state.name}</h1>
                </div>
                <div className={css.metadata}>
                    {state.genre.title} | {state.samples.length} samples
                </div>
            </div>
        </div>
    )
}