import React from "react";
import css from './Player.module.css'
import {useSelector} from "react-redux";

const Player = () => {

    const plsrc = useSelector(state => state.player.src)

    return (<div className={css.div}>
            <audio id="audio" src={plsrc.src} controls></audio>
        </div>)
}

export default Player