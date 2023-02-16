import React, {useEffect} from 'react'
import css from './SamplePack.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPack} from "../../store/Actions/actions";
import {useParams} from "react-router-dom";

export const SamplePack = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const state = useSelector(state => state.sample_pack)

    useEffect(() => {
        dispatch(getPack(params.packId))
    }, [])

    return (
        <div className={css.SamplePack}>
            <img src={state.sample_pack.cover_src} alt=""/>
        </div>
    )
}
