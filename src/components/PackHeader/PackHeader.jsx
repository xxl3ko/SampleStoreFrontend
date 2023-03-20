import React, {useEffect} from 'react'
import css from './PackHeader.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getPack} from "../../store/Actions/packsActions";
import {PackLabel} from "../PackLabel/PackLabel";

export const PackHeader = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.pack)
    const params = useParams()

    useEffect(() => {
        dispatch(getPack(params.packId))
    }, [params.packId, dispatch])


    return (
        <div className={css.header}>
            <img className={css.cover} src={state.pack.cover_src} alt=""/>
            <div className={css.content}>
                <div className={css.label}>
                    <PackLabel labelId = {state.pack.label}/>
                </div>
                <div className={css.title}>
                    <h1>{state.pack.title}</h1>
                </div>
            </div>
        </div>
    )
}