import React from 'react'
import css from './SamplePackBoard.module.css'
import {useDispatch} from "react-redux";
import {getPacks} from "../../store/Actions/actions";
import {packRequest} from "../../api/sm_board";

export const SamplePackBoard = () => {
    const dispatch = useDispatch()

    const oleg = () => {
        dispatch(getPacks())
    }

    return <div className={css.SamplePackBoard}>
        <button onClick={oleg}>GET</button>
    </div>
}