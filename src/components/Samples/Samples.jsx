import React, {useEffect} from "react";
import css from "./Samples.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getSamples} from "../../store/Actions/actions";


export const Samples = (packID) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.samples)

    useEffect(() => {
        dispatch(getSamples(packID))
    }, [])

    return (
        <div className={css.sample_board}>
            {state.samples.map(sample => {
                return (
                    <div className={css.sample}>
                        {sample.title}
                    </div>
                )
            })
            }
        </div>
    )
}