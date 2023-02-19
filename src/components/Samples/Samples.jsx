import React, {useEffect} from "react";
import css from "./Samples.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getSamples} from "../../store/Actions/actions";
import {setPlayerSrc} from "../../store/Actions/playerActions";
import {PlusCircleOutlined} from "@ant-design/icons";


export const Samples = (packID) => {
    const dispatch = useDispatch()
    const statePack = useSelector(state => state.pack.pack)
    const stateSample = useSelector(state => state.samples)

    useEffect(() => {
        dispatch(getSamples(packID))
    }, [])

    const playerSrc = (src) => {
        return dispatch(setPlayerSrc(src))
    }

    return (
        <div className={css.sample_list}>
            {stateSample.samples.map(sample => {
                return (
                    <div className={css.sample} onClick={() => playerSrc(sample.file_src)}>
                        <div className={css.add_shoping_cart}><PlusCircleOutlined /></div>
                        <div className={css.cover}>
                            <img src={statePack.cover_src} alt=""/>
                        </div>
                        <div>{sample.title}</div>

                    </div>
                )
            })
            }
        </div>
    )
}