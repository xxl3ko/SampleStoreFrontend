import React from "react";
import css from './Player.module.css'
import {useSelector} from "react-redux";

export const Player = () => {
    const state = useSelector(state => state.player.src)

    return (
        <div className={css.div}>
            <audio id="audio" src={state} controls></audio>
        </div>
    )
}