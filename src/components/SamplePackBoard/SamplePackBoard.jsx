import React from 'react'
import css from './SamplePackBoard.module.css'
import {useDispatch} from "react-redux";
import {getPack} from "../../store/actions";

export const SamplePackBoard = () => {
    const dispatch = useDispatch()

    const oleg = () => {
        return dispatch(getPack)
    }

    return <div className={css.SamplePackBoard}>
        <button onClick={oleg}>GET</button>
    </div>
}