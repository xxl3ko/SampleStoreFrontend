import React, {useEffect} from 'react'
import css from './Packs.module.css'

import {useDispatch, useSelector} from "react-redux";
import {getPacks} from "../../store/Actions/actions";
import {NavLink} from "react-router-dom";

export const Packs = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.sample_packs)

    useEffect(() => {
        dispatch(getPacks())
    }, [])

    return (
        <div className={css.SamplePacks}>
            {state.sample_packs.map(pack => {
                return (
                    <NavLink to={`/packs/${pack.id}`}>
                        <img src={pack.cover_src} alt=""></img>
                    </NavLink>
                )
            })
            }
        </div>
    )
}