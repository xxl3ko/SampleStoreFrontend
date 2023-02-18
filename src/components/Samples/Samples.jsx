import React, {useEffect} from "react";
import css from "./Samples.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getSamples} from "../../store/Actions/actions";
import {setPlayerSrc} from "../../store/Actions/playerActions";


export const Samples = (packID) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.samples)

    useEffect(() => {
        dispatch(getSamples(packID))
    }, [])

    const playerSrc = (src) => {
        return dispatch(setPlayerSrc(src))
    }

    return (
        <div className={css.sample_board}>
            {state.samples.map(sample => {
                return (
                    <div className={css.sample} onClick={() => playerSrc(sample.file_src)}>
                        {sample.title}
                    </div>
                )
            })
            }
        </div>
    )
}