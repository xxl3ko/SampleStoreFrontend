import React, {useEffect} from 'react'
import css from './PackHeader.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getPack} from "../../store/Actions/actions";

export const PackHeader = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.sample_pack)
    const params = useParams()

    useEffect(() => {
        dispatch(getPack(params.packId))
    }, [])

    return (
        <div className={css.header}>
            <img className={css.cover} src={state.sample_pack.cover_src} alt=""/>
            <div className={css.content}>
                <div className={css.title}>
                    <h1>{state.sample_pack.title}</h1>
                </div>
            </div>
        </div>
    )
}