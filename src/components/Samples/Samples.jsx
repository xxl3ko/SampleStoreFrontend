import React, {useEffect} from "react";
import css from "./Samples.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getSamples} from "../../store/Actions/packsActions";
import {setPlayerSrc} from "../../store/Actions/playerActions";
import {PlusCircleOutlined, MinusCircleOutlined} from "@ant-design/icons";
import {Waveform} from "../Waveform/Waveform";
//import {addSampleToCart} from "../../store/Actions/samples";


export const Samples = (packID) => {
    const dispatch = useDispatch()
    const statePack = useSelector(state => state.pack.pack)
    const stateSample = useSelector(state => state.samples)

    useEffect(() => {
        dispatch(getSamples(packID))
    }, [packID, dispatch])

    const playerSrc = (src) => {
        return dispatch(setPlayerSrc(src))
    }

    const handleAddSampleToCart = (data) => {
        const playlist = JSON.parse(localStorage.getItem('playlist')) || []
        playlist.push(data)
        localStorage.setItem('playlist', JSON.stringify(playlist))
    }

    const handleRmSampleFromCart = (sample_id) => {
        const playlist = JSON.parse(localStorage.getItem('playlist')).filter(item => item.id !== sample_id)
        localStorage.setItem('playlist', JSON.stringify(playlist))
    }

    /*const hidden = (sample_id) => {
        const ol = JSON.parse(localStorage.getItem('playlist')).filter(item => item.id === sample_id)
        console.log(ol)
        if (ol) {
            return css.add_shoping_cart
        } else {
            return css.hidden
        }
    }*/

    return (<div className={css.sample_list}>
        {stateSample.samples.map(sample => {
            return (<div className={css.sample} key={sample.title} onClick={() => playerSrc(sample.file_src)}>
                <div
                    className={css.add_shoping_cart}
                    onClick={() => handleAddSampleToCart(sample)}
                >
                    <PlusCircleOutlined/>
                </div>
                <div
                    className={css.add_shoping_cart}
                    onClick={() => handleRmSampleFromCart(sample.id)}
                >
                    <MinusCircleOutlined/>
                </div>
                <div className={css.cover}>
                    <img src={statePack.cover_src} alt=""/>
                </div>
                <div className={css.title}>
                    {sample.title}
                </div>
                <div className={css.waveform}>
                    <Waveform id={sample.id} src={sample.file_src}/>
                </div>
            </div>)
        })}
    </div>)
}