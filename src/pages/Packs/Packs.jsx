import React, {useEffect} from 'react'
import css from './Packs.module.css'

import {useDispatch, useSelector} from "react-redux";
import {getPacks} from "../../store/Actions/packsActions";
import {PackCard} from "../../components/PackCard/PackCard";


export const Packs = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.packs)

    useEffect(() => {
        dispatch(getPacks())
    }, [dispatch])

    console.log(state)

    return (
        <div className={css.container}>
            {state.packs.map(pack => {
                return (
                    <PackCard pack={pack}/>
                )
            })
            }
        </div>
    )
}