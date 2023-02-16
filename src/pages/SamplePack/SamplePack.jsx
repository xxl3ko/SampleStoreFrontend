import React, {useEffect} from 'react'
import css from './SamplePack.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPack} from "../../store/Actions/actions";
import {useParams} from "react-router-dom";
import {Samples} from "../../components/Samples/Samples";
import {Player} from "../../components/Player/Player";

export const SamplePack = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.sample_pack)
    const params = useParams()

    useEffect(() => {
        dispatch(getPack(params.packId))
    }, [])

    return (
        <div>
            <div className={css.SamplePack}>
                <img src={state.sample_pack.cover_src} alt=""/>
            </div>
            <Samples packId={params.packId}></Samples>
            <Player/>
        </div>
    )
}
