import css from "./Samples.module.css"

import {useDispatch, useSelector} from "react-redux";
import {setPlayerSrc} from "../../store/Actions/playerActions";
import {PlusCircleOutlined, MinusCircleOutlined} from "@ant-design/icons";
import {Waveform} from "../Waveform/Waveform";
import {Favorite} from "../Favorite/Favorite";


export const Samples = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.pack)


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

    return (<div className={css.sample_list}>
        {state.samples.map((sample, index) => {
            return (<div className={css.sample} key={sample.name} onClick={() => playerSrc(sample.file_src)}>
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
                    <img src={state.cover} alt=""/>
                </div>
                <div className={css.name}>
                    {sample.name}
                </div>
                <div className={css.waveform}>
                    <Waveform id={sample.id} src={sample.file_src}/>
                </div>
                <div className={css.favorite}>
                    <Favorite index={index} id={sample.id}/>
                </div>
            </div>)
        })}
    </div>)
}